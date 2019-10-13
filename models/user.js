const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create cart schema 

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email :{type:String , required:true , unique:true,},
    password : {type :String ,required:true , unique:true},
});

module.exports = mongoose.model('User', userSchema);
