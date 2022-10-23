const books = require("./../models/books");
const bookModel = require("./../models/books");



const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre, id: book._id });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

const delBook = async (req, res) => {
  try {
    const bookID = req.params.id;
    const book = await bookModel.findById(bookID);
    const bookName = book.name;
    await book.remove();
    console.log(`${bookName} deleted successfully!`);
   
    
  }
  catch (err) {
    console.log(err);
  }
  finally {
    
    res.redirect("/book-list");
  }
};

const getUpdateBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    const bookName = book.name;
    console.log(`${bookName}`);
    res.render("updateBook", { book: book });
  } catch (err) {
    res.json({ message: err });
  }
 
};

  const updateBook = async (req, res) => {
    try {
      const book = await bookModel.findById(req.params.id);
      if(req.body.name) 
      {
      book.name = req.body.name;
      }
      else
      {
        book.name = book.name;
      }
      if(req.body.author) {
      book.author = req.body.author;
      }
      else
      {
        book.author = book.author;
      }
      if(req.body.genre)
      {
      book.genre = req.body.genre;
      }
      else
      {
        book.genre = book.genre;
      }
      book.save();
      console.log("Data Updated Successfully!");
      
    }
    catch (err) {
      console.log(err);
    }
    finally {
    
      res.redirect("/book-list");
    }
    
  };




  module.exports = { getBookList, getBook, postBook, delBook, getUpdateBook, updateBook };