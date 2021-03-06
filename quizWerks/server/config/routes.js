
    const quizzes = require("../controllers/quizzes")
    const users = require("../controllers/users")
    module.exports = app => {
        app.get("/quizzes", quizzes.index);
        app.get("/quizzes/:quizId", quizzes.show)
        app.post("/quizzes", quizzes.create);
        app.put("/quizzes/:quizId", quizzes.update)
        app.delete("/quizzes/:quizId", quizzes.destroy)

        app.get("/users", users.index);
        app.get("/users/:userId", users.show)
        app.post("/users", users.create);
        app.put("/users/:userId", users.update)
        app.delete("/users/:userId", users.destroy)
    }
    
