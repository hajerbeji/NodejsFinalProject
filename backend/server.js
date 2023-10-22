require('dotenv').config()
const book = require("./Models/book.js");
const FavoriteBookModel = require('./Models/favoris.js'); 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const port = 3009;
app.use(express.json())
app.use(cors());


// connecting to database
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true,}).then(()=>{
    console.log(`connected to DB`)
  startServer();
}).catch((e)=>{
    console.log(e)
});
const startServer = () => {
    app.listen(port, ()=>{
        console.log(`Running on ${port}`)
    })
}
// End connecting to database


app.post("/",async(req,res)=>{
    try {
        const books = book.find();
        res.json(books)
    } catch (error) {
        console.log(error)
    }
})

app.get('/list', async(req,res)=>{
   try {
     var response = await  book.bookModel.find();
     res.json(response);

    } catch (error) {
        console.log(error)
    }

})

app.post('/add',async(req,res)=>{
    const {title,author,description,img,rating} = req.body;

    const newBook = new book.bookModel({
        title : title,
        author : author,
        img: img,
        description : description,
        rating : rating
    });

    try {
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
        res.status(400).json("Error on adding the book !!")
        console.log(error)
    }
})
app.post('/books/like', async (req, res) => {
    const { bookId } = req.body;
  
    try {
      // Find the book by its MongoDB document ID
      const bookById = await book.bookModel.findById(bookId);
  
      if (!bookById) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      // Toggle the 'liked' attribute
      bookById.liked = !bookById.liked;
  
      // Save the updated book back to the database
      await bookById.save();
  
      res.status(200).json({ message: 'Book liked/unliked successfully', liked: bookById.liked });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error while updating the book' });
    }
  });


app.get('/books/liked', async (req, res) => {
try {
    // Find all books that are liked (where liked is true)
    const likedBooks = await book.bookModel.find({ liked: true });
  
    if (likedBooks.length === 0) {
        return res.status(404).json({ message: 'No liked books found' });
    }
  
    res.status(200).json(likedBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error while fetching liked books' });
    }
  });
  
  

