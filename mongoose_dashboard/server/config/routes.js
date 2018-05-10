const wolves = require("../controllers/wolves")
module.exports = app => {
    app.get("/", (req, res) => {
        wolves.index(req, res)
    })

    app.get("/wolves/new", (req, res) => {
        wolves.new(req, res);
    })

    app.get("/wolves/:id", (req, res) => {
        wolves.show(req, res);
    });

    app.post("/wolves", (req, res) => {
        wolves.create(req, res);
    });

    app.get("/wolves/:id/edit", (req, res) => {
        wolves.edit(req, res);
    })

    app.post("/wolves/:id", (req, res) => {
        wolves.update(req, res);
    })

    app.get("/wolves/:id/destroy", (req, res) => {
        wolves.destroy(req, res);
    });
}