
    const messages = require("../controllers/messages")
    module.exports = app => {
        app.get("/server", messages.index);
        app.get("/server/:messageId", messages.show)
        app.post("/server", messages.create);
        app.put("/server/:messageId", messages.update)
        app.delete("/server/:messageId", messages.destroy)
    }
    
