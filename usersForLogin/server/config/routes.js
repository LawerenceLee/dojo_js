
    const users = require("../controllers/users")
    module.exports = app => {
        app.get("/users", users.index);
        app.get("/users/:userId", users.show)
        app.post("/users", users.create);
        app.put("/users/:userId", users.update)
        app.delete("/users/:userId", users.destroy)
    }
    
