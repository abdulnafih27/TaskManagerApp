const mongoose = require('mongoose');

const tasks = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'must provide some task'],
        trim : true,
        maxlength : [20, 'Task name cannot be more than 20 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('Task', tasks);