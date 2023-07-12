const router = require("express").Router();
const bookModel = require("../model/book_model");

// This is getting the books list from the database
router.get("/books", async function (req, res) {
  const bookList = await bookModel.find();
  console.log(bookList);
  res.send(bookList);
});

router.get("/books/:id", async function (req, res) {
  const { id } = req.params;
  const book = await bookModel.findOne({ isbn: id });
  if (!book) return res.send("Book is not found");
  res.send(book);
});

router.post("/books", async function (req, res) {
  const title = req.body.title;
  const isbn = req.body.isbn;
  const author = req.body.author;
  const bookExist = await bookModel.findOne({ isbn: isbn });

  if (bookExist) {
    return res.send("Book already exists");
  }

  var data = await bookModel.create({ title, isbn });

  res.send("Book Uploaded");
});

router.delete("/books/:id", async function (req, res) {
  const { id } = req.params;
  const bookExist = await bookModel.findOne({ isbn: id });
  if (!bookExist) return res.send("Book Does Not Exist");
  await bookModel
    .deleteOne({ isbn: id })
    .then(function () {
      console.log("Data deleted");
      res.send("Book Record Deleted Successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
