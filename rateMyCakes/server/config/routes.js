const cakes = require("../controllers/cakes")
module.exports = app => {
    app.get("/cakes", cakes.index);
    app.post("/cakes", cakes.create); 
    app.put("/cakes/:cakesId", cakes.update); 
}