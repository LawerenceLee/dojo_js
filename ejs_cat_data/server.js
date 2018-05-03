const express = require("express");
const app = express();
const portNum = 8000;

app.use(express.static(__dirname + "/static"))
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
  response.render('cats');
})
app.get("/snuggles", function (request, response){
  const cat_attrs = {
    Name: 'Snuggles',
    Food: 'Chicken Liver',
    Age: '3',
    Sleeping_Spots: ['top of the couch', 'windowsill']
  }
  response.render('kitty', {kitty: cat_attrs});
})
app.get("/charlie", function (request, response){
  const cat_attrs = {
    Name: 'Charlie',
    Food: 'FISH Liver',
    Age: '5',
    Sleeping_Spots: ['on top of the cabinet', 'in bathroom sink']
  }
  response.render('kitty', {kitty: cat_attrs});
})
app.get("/fatty", function (request, response){
  const cat_attrs = {
    Name: 'Fatty',
    Food: 'FISH',
    Age: '1',
    Sleeping_Spots: ['under of the couch', 'under the bed'],
  }
  response.render('kitty', {kitty: cat_attrs});
})

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
  })