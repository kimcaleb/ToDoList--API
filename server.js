require("dotenv").config();

const  
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000,
    path = require("path"),
    logger = require("morgan");


// Configuration 

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));


// Routes



// Listen on Port
app.listen(PORT, (err) => {
    console.log(err||`Listening on Port ${PORT}` );
});
