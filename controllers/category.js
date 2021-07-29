import Category from "../models/category";
import _ from 'lodash';

export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Add failed"
            })
        }
        res.json(data);
    })
}

export const list = (req, res) => {
    Category.find()
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Not found"
                })
            }
            res.json(data);
        })
}

export const categoryById = (req, res, next, id) => {
    Category.findById(id)
        .exec((err, category) => {
            if (err || !category) {
                res.status(404).json({
                    error: "Not found"
                })
            }
            req.category = category;
            next();
        })
}
export const read = (req, res) => {
    return res.json(req.category)
}
export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedBook) => {
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
    let category = req.category;
    category = _.assignIn(category, req.body);
    category.save((err, data)=>{
        if (err) {
            return res.status(400).json({
                error: "Update failed"
            })
        }
        res.json(data);
    })
}