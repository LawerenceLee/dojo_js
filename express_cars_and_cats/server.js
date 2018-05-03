const express = require("express");
const app = express();
const portNum = 8000;

app.use(express.static(__dirname + "/static"))

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
  })