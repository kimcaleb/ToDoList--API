const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
    name: String,
    isComplete: false
}, {timestamps:true});

module.exports = mongoose.model("ToDoList",todolistSchema);