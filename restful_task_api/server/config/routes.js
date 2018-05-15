const tasks = require("../controllers/tasks")
module.exports = app => {
    app.get("/tasks", tasks.index);
    app.get("/tasks/:taskId", tasks.show); 
    app.post("/tasks", tasks.create); 
    app.put("/tasks/:taskId", tasks.update); 
    app.delete("/tasks/:taskId", tasks.destroy);
}