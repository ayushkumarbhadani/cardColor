const mongoose=require('mongoose');

const cardColor=new mongoose.Schema({
    name:{
        type:String
    },
    code:{
        type:String
    },
    data:[
        {
            quality:{
                type:String
            },
            traits:{
                type: Array,
                default: []
            }
        }
    ]
});

module.exports=mongoose.model("cardColor",cardColor);