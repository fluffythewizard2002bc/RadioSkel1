'use strict';
///# http://localhost:5000/file/getSingleFiles/
///# http://localhost:5000/file/getMultipleFiles/
//! https://www.youtube.com/watch?v=JwGcP5RcgQg
require("dotenv").config();
require("./db/mongoose");
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const {userRouter} = require("./routes/userRouter");
const {authRouter} = require("./routes/authRouter");
const fileRoutes = require('./routes/file-upload-route');

const port = process.env.PORT || 8080;
const app = express();

const publicPath = path.join(__dirname, "../client/build");
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use("/", userRouter);
app.use("/", authRouter);
app.use('/file/', fileRoutes.routes);


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
  });

app.listen(port, () => console.log('server is listening on port:',port));
