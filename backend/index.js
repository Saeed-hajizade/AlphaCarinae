const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser')

const User = require("./models/User");
const { uploadVoice, uploadFile, uploadImg } = require("./middleware/upload");


app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('public'));

const server = app.listen(4000, (err) => {
});




app.post("/SignUp", async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username });
    if (user) {
        return res.status(200).send({});
    }
    else if (!user) {
        const newUser = new User({
            username,

            password
        });
        await newUser.save();
        res.status(201).send({ newUser });
    }
});

app.post("/SignIn", async (req, res) => {


    const username = req.body.username;




    const user = await User.findOne({ username });
    if (user) {
        return res.status(200).send({ user });
    } else {
        return res.status(404);
    }

});

app.get("/getUsers", async (req, res) => {

    const users = await User.find({});
    return res.send(users)

});

app.get("/getSingleUser/:id", async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
        return res.status(200).send({ user })
    } else {
    }
});

const uploadImage = uploadImg.fields([
    { name: 'file', maxCount: 1 },
]);

app.put("/EditUser/:id", uploadImage, async (req, res) => {
   
    const user = await User.findOne({ _id: req.params.id });

    if (req.body.file) {
        const filePath = `http://localhost:4000/` + req.files.file[0].path.slice(7).replace(/\\/g, '/');
        const updatedUser = { $set: { username: req.body.username, password: req.body.password, imageUrl: filePath } };
        await User.updateOne(user, updatedUser);
        return res.status(200).send();

    }
    if (req.body.imageUrl) {
        const updatedUser = { $set: { username: req.body.username, password: req.body.password, imageUrl: req.body.imageUrl } };
        await User.updateOne(user, updatedUser);
        return res.status(200).send();
    }









});

const upVoice = uploadVoice.fields([
    { name: 'voiceMessage', maxCount: 1 },
]);

app.post("/uploadVoice", upVoice, async (req, res) => {
    if (req.files) {
        const filePath = `http://localhost:4000/` + req.files.voiceMessage[0].path.slice(7).replace(/\\/g, '/');
        await res.json({
            filePath: filePath,
        });
    } else {
        res.status(400).json({
            success: false
        })
    }
});

const upFiles = uploadFile.fields([
    { name: 'file', maxCount: 1 },
]);

app.post("/uploadFile", upFiles, async (req, res) => {

    if (req.files) {
        const filePath = `http://localhost:4000/` + req.files.file[0].path.slice(7).replace(/\\/g, '/');

        await res.json({
            filePath: filePath,

        });
    } else {
        res.status(400).json({
            success: false
        })
    }
});





mongoose
    .connect("mongodb://localhost:27017/saeed", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Mongo connected...'))
    .catch((err) => console.log('Could not connect to MongoDB...', err));


const io = require("socket.io")(server,
    {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

const mySocket = io.of("/socket");

mySocket.on("connection", (socket) => {
    console.log("new user connected");

    socket.on("newMessage", (message) => {

        const username = message.receiver.name;
        const myUserName = message.sender.name;
        mySocket.to(`${myUserName}:${username}`).to(`${username}:${myUserName}`).emit("newMessage",
         { ...message, date: new Date(), id: Math.floor(Math.random() * Math.pow(10, 7)),type:'text'
         });
    });

    socket.on("isTyping", ({ sender, receiver, isTyping }) => {
        const userReceiver = receiver;
        const userIsTyping = sender;
        mySocket.to(`${userReceiver}:${userIsTyping}`).to(`${userIsTyping}:${userReceiver}`).emit("isTyping", { userIsTyping, isTyping });
    });

    socket.on("seenMessage", ({ sender, receiver, id }) => {
        const userReceiver = receiver;
        const userIsTyping = sender;
        mySocket.to(`${userReceiver}:${userIsTyping}`).to(`${userIsTyping}:${userReceiver}`).emit("seenMessage", id);
    });

    socket.on("editMessage", ({ msg, id, sender, receiver }) => {
        const myUsername = sender;
        const username = receiver;
        mySocket.to(`${myUsername}:${username}`).to(`${username}:${myUsername}`).emit("editMsg", { msg, id });
    });

    socket.on("deleteMsg", id => {
        socket.emit("deleteMsg", id)
    });

    socket.on("uploadVoice", ({ filePath, sender, receiver }) => {
        const myUsername = sender.name;
        const username = receiver.name;
        mySocket.to(`${myUsername}:${username}`).to(`${username}:${myUsername}`).emit("newMessage",
            {
                filePath,
                type: "voice",
                sender, receiver,
                date: new Date(),
                id: Math.floor(Math.random() * Math.pow(10, 7))
            }
        )
    });

    socket.on("uploadFile", ({ filePath, sender, receiver }) => {

        const myUsername = sender.name;
        const username = receiver.name;

        mySocket.to(`${myUsername}:${username}`).to(`${username}:${myUsername}`).emit("newMessage",
            {
                filePath,
                type: "file",
                sender, receiver,
                date: new Date(),
                id: Math.floor(Math.random() * Math.pow(10, 7))
            }
        )
    });
    socket.on("uploadImageSender", ({ filePath, sender, receiver }) => {

        const myUsername = sender.name;
        const username = receiver.name;
        mySocket.to(`${myUsername}:${username}`).to(`${username}:${myUsername}`).emit("newMessage",
            {
                filePath,
                type: "image",

                sender, receiver,
                date: new Date(),
                id: Math.floor(Math.random() * Math.pow(10, 7))
            }
        )
    });
    socket.on("uploadVideo", ({ filePath, sender, receiver }) => {

        const myUsername = sender.name;
        const username = receiver.name;
        mySocket.to(`${myUsername}:${username}`).to(`${username}:${myUsername}`).emit("newMessage",
            {
                filePath,
                type: "video",

                sender, receiver,
                date: new Date(),
                id: Math.floor(Math.random() * Math.pow(10, 7))
            }
        )
    });

    socket.on("joinChat", ({ username, myUserName }) => {
        socket.join(`${username}:${myUserName}`);
        socket.join(`${myUserName}${username}`)
    });
    socket.on("leaveChat", ({ username, myUserName }) => {
        socket.leave(`${username}:${myUserName}`);
        socket.leave(`${myUserName}${username}`)
    });


    socket.on("disconnect", () => {
    });
});