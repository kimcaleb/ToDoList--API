const ToDoList = require("../models/todolist");

module.exports = {
    index: (req,res) => {
        ToDoList.find({},(err,todolists)=> {
            if (err) res.json({success:false, err});
            res.json({success:true,todolists});
        });
    },
    destroy: (req,res) => {
        ToDoList.findByIdAndDelete(req.params.id, (err,todoitem) => {
            if (err) res.json({success:false, err});
            res.json({success:true, todoitem});
        });
    },
    update: (req,res) => {  
        ToDoList.findByIdAndUpdate(req.params.id, (err,updateditem) =>{
            if (err) res.json({success:false, err});
            res.json({success:true,updateditem});
        });
    }
}