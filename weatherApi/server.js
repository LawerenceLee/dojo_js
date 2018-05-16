
const express = require("express");
const app = express();
const path = require('path')
app.use(express.static(__dirname + "/angularWeatherApi/dist/angularWeatherApi"))

// Server
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on Port ${portNum}`);
});

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularWeatherApi/dist/angularWeatherApi/index.html"))
});