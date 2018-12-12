const 
    express = require("express"),
    routerToDoList = express.Router(),
    ToDoList = require("../controllers/todolist");


routerToDoList.get("/", ToDoList.index);
routerToDoList.post("/", ToDoList.create);
routerToDoList.patch("/:id",ToDoList.update);
routerToDoList.delete("/:id", ToDoList.destroy);

module.exports = routerToDoList;