const express = require("express");
const app = express();
const portNum = 8000;

app.use(express.static(__dirname + "/static"))
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
  response.render('cars');
})
app.get("/cars/new", function (request, response){
  response.render('form');
})
app.get("/cats", function (request, response){
  response.render('cats');
})

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
  })