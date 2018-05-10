const tasks = require("../controllers/tasks")
module.exports = app => {
    app.get("/tasks", (req, res) => {
        tasks.index(req, res);
    })
    app.get("/tasks/:taskId", (req, res) => {
        tasks.show(req, res);
    })
    app.post("/tasks", (req, res) => {
        tasks.create(req, res);
    })
    app.put("/tasks/:taskId", (req, res) => {
        tasks.update(req, res);
    })
    app.delete("/tasks/:taskId", (req, res) => {
        tasks.destroy(req, res);
    })
}