const mongoose=require('mongoose');

const saveCard=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    code:{
        type:String
    },
});

module.exports=mongoose.model("saveCard",saveCard);