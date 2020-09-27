const mongoose =require('mongoose')
const Schema=mongoose.Schema

const dataSchema=new Schema({
    
    num:{
        type:String
    },
    author:{
        type:String
    },
    publisher:{
        type:String
    },
    title:{
        type:String
    },
    stock:{
        type:Number
    }

})
const Data=mongoose.model('Data',dataSchema)
module.exports={Data}