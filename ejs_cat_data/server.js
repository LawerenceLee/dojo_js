const express = require("express");
const app = express();
const portNum = 8000;

app.use(express.static(__dirname + "/static"))
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
  response.render('cats');
})
app.get("/snuggles", function (request, response){
  response.render('kitty');
})
app.get("/charlie", function (request, response){
  response.render('kitty');
})
app.get("/fatty", function (request, response){
  response.render('kitty');
})

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
  })