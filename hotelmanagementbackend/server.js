




const express = require("express");
require("dotenv").config();
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");


const bodyParser = require('body-parser');
const cors = require("cors");
const fileUpload = require('express-fileUpload');


//import routes
const roomRoutes = require('./routes/rooms');

const isRoutes = require('./routes/stockitems');
const iorderRoutes = require('./routes/inventoryorders');
const isupplierRoutes = require('./routes/inventorysuppliers');

const BookingRoutes = require('./routes/Booking');

const EBookingRoutes = require('./routes/EBooking');

const detailRoutes = require('./routes/details');

const leaveRoutes = require('./routes/leaves');

const EventRoutes = require('./routes/events');
const eventpackageRoutes = require('./routes/eventpackages');

const menutablesRoutes = require('./routes/menutables');
const summarytablesRoutes = require('./routes/summarytables');

const transportRoutes = require('./routes/transports');

const postRoutes1= require('./routes/expenses');
const postRoutes2= require('./routes/income');
const postRoutes3= require('./routes/salary');


// const postRoutes = require('./routes/posts');

// const menutablesRoutes = require('./routes/menutables');
// const summarytablesRoutes = require('./routes/summarytables');


// app.use(menutablesRoutes);
// app.use(summarytablesRoutes);

//app middleware
app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());

//route middleware
app.use(roomRoutes);

app.use(isRoutes);
app.use(iorderRoutes);
app.use(isupplierRoutes);

app.use(BookingRoutes);

app.use(EBookingRoutes);

app.use(detailRoutes);

app.use(leaveRoutes);

app.use(EventRoutes);
app.use(eventpackageRoutes);

app.use(menutablesRoutes);
app.use(summarytablesRoutes);

app.use(transportRoutes);

app.use(postRoutes1)
app.use(postRoutes2)
app.use(postRoutes3)


// app.use(postRoutes);
// default options
app.use(fileUpload());


const usersRouter = require("./routes/users");
const path = require("path");


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB connected"));

app.use(express.json());


app.use("/api/users", usersRouter);

let users = {}
io.on('connection', socket => {
  console.log("Hello from the Server! Socket ID: "+socket.id)

  socket.on("userJoin", username => {
    users[socket.id] = username
    socket.join(username)
    socket.join("General Chat")
    console.log("User Object after connection: ", users)
    io.emit("userList", [...new Set(Object.values(users))])
  })

  socket.on("newMessage", newMessage => {
    io.to(newMessage.room).emit("newMessage", { name: newMessage.name, msg: newMessage.msg, isPrivate: newMessage.isPrivate})
  })

  socket.on("roomEntered", ({oldRoom, newRoom1}) => {
    socket.leave(oldRoom)
    io.to(oldRoom).emit("newMessage", {name: "NEWS", msg: `${users[socket.id]} just left "${oldRoom}"`})
    io.to(newRoom1).emit("newMessage", {name: "NEWS", msg: `${users[socket.id]} just joined "${newRoom}"`})
    socket.join(newRoom1)
  })

  socket.on("disconnect", () => {
    //io.emit("newMessage", {name: "NEWS", msg: `${users[socket.id]} totally left the chat`})
    delete users[socket.id]
    io.emit("userList", [...new Set(Object.values(users))])
    console.log("Users after disconnection: ", users)
  })
})

app.use(express.static(path.join(__dirname, "../hotelmanagementfrontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../hotelmanagementfrontend/build/index.html"))
);

server.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
