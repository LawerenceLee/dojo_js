
    const express = require("express");
    const app = express();
    const path = require("path")
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/client/views")
    app.use(express.static(__dirname + "/angularUsers/dist/angularUsers"))


    // Session
    let session = require("express-session");
    app.use(session({
        secret: "ai0nasd979YTUG:*PYsdaisdh;dspdi",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }))

    // Body Parser
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    // Flash
    const flash = require("express-flash");
    app.use(flash());

    // Mongoose
    require("./server/config/mongoose")

    // Server
    const portNum = 8000;
    const server = app.listen(portNum, () => {
        console.log(`Listening on Port ${portNum}`);
    });

    // Routes
    require("./server/config/routes.js")(app)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angularUsers/dist/angularUsers/index.html"))
    });
    
