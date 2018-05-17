
    const authors = require("../controllers/authors")
    module.exports = app => {
        app.get("/authors", authors.index);
        app.get("/authors/:authorId", authors.show)
        app.post("/authors", authors.create);
        app.put("/authors/:authorId", authors.update)
        app.delete("/authors/:authorId", authors.destroy)
    }
    
