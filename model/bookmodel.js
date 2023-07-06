const mongoose=require('mongoose')
const bookschema=mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    price:Number
})

const BookModel=mongoose.model("book",bookschema)

module.exports={
    BookModel
}