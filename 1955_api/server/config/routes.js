const persons = require("../controllers/people");
module.exports = app => {
    app.get("/", (req, res) => {
        persons.index(req, res);
    })

    app.get("/new/:name", (req, res) => {
        persons.create(req, res);
    })

    app.get("/remove/:name", (req, res) => {
        persons.destroy(req, res);
    })

    app.get("/:name", (req, res) => {
        persons.show(req, res);
    })
}