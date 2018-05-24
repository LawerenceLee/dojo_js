
    const quizzes = require("../controllers/quizzes")
    module.exports = app => {
        app.get("/quizzes", quizzes.index);
        app.get("/quizzes/:quizId", quizzes.show)
        app.post("/quizzes", quizzes.create);
        app.put("/quizzes/:quizId", quizzes.update)
        app.delete("/quizzes/:quizId", quizzes.destroy)
    }
    
