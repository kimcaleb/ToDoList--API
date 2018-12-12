require("dotenv").config();

const  
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000,
    path = require("path"),
    logger = require("morgan");


// Configuration 
require("./db/index");
// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public","views")));
app.use(logger("dev"));


// Routes
const todolistRouter = require("./routers/routerToDoList");
app.use("/api/todolists", todolistRouter);


// Listen on Port
app.listen(PORT, (err) => {
    console.log(err||`Listening on Port ${PORT}` );
});
