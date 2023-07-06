const express=require("express")

const {BookModel}=require("../model/bookmodel")

const bookrouter=express.Router()

//adding the book
bookrouter.post("/addbook",async(req,res)=>{
    try{
     const payload=req.body;

     const book=new BookModel(payload)
     await book.save()
     res.send({msg:"book added success"})
    }catch(err)
    {
        res.send({msg:err.message})
    }
})

//geting the books
bookrouter.get("/book",async(req,res)=>{
    try{
         const book=await BookModel.find();
         res.send(book)

    }catch(err)
    {
        console.log(err)
    }
})


//delete the book

bookrouter.delete("/deletebook/:bookID",async(req,res)=>{

    try{
     const bookID=req.params.bookID
      let deletedbook=await BookModel.findByIdAndDelete({_id:bookID});
      res.send({msg:"book deleted"})
    }catch(err)
    {
        console.log(err)
    }
})


//filter the code

bookrouter.get("/filter/:genre",async(req,res)=>{
    try{
      const genre=req.params.genre.toLowerCase();
      let books=await BookModel.find({genre:genre})
      res.json(books)

    }catch(err)
    {
        console.log(err)
    }
})

//sorting

bookrouter.get("/sort/:field",async(req,res)=>{
    try{
       const field=req.params.field.toLowerCase();
       const sortoption={[field]:1}
       const books=await BookModel.find().sort(sortoption)
       res.json(books)
    }catch(err)
    {
        console.log(err)
    }
})
module.exports={
    bookrouter
}