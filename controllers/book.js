import Book from "../models/book";
import _ from 'lodash';

export const create = (req, res) => {
    const book = new Book(req.body);
    book.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Add failed"
            })
        }
        res.json(data);
    })
}

export const list = (req, res) => {
    Book.find()
        .populate("category")
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Not found"
                })
            }
            res.json(data);
        })
}

export const bookById = (req, res, next, id) => {
    Book.findById(id)
        .populate("category", "_id name")
        .exec((err, book) => {
            if (err || !book) {
                res.status(404).json({
                    error: "Not found"
                })
            }
            req.book = book;
            next();
        })
}
export const read = (req, res) => {
    return res.json(req.book)
}
export const remove = (req, res) => {
    let book = req.book;
    book.remove((err, deletedBook) => {
        if (err) {
            return res.status(400).json({
                error: "Delete failed"
            })
        }
        res.json({
            deletedBook,
            message: "Delete success!"
        })
    })
}
export const update = (req, res) => {
    let book = req.book;
    book = _.assignIn(book, req.body);
    book.save((err, data)=>{
        if (err) {
            return res.status(400).json({
                error: "Update failed"
            })
        }
        res.json(data);
    })
}