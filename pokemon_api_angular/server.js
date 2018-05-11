    const express = require("express");
    const app = express();
    app.use(express.static(__dirname + '/angularPokemon/dist/angularPokemon'))

    // Server
    const portNum = 8000;
    const server = app.listen(portNum, () => {
        console.log(`Listening on Port ${portNum}`);
    });
