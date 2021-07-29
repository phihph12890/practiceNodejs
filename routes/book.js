import express from "express";
import { create, list, bookById, read, update, remove } from "../controllers/book";

const router = express.Router();

//List
router.get('/books', list);
//Create
router.post("/books", create);
//Read
router.get("/books/:bookId", read)
//Put
router.put("/books/:bookId", update)
//delete
router.delete("/books/:bookId", remove);
//param
router.param("bookId", bookById);


module.exports = router;