import express from "express";
import { create, list, categoryById, read, update, remove} from "../controllers/category";

const router = express.Router();

//List
router.get('/categories', list);
//Create
router.post("/categories", create);
//Read
router.get('/categories/:categoryId', read);
//Put
router.put("/categories/:categoryId", update)
//delete
router.delete("/categories/:categoryId", remove);
//param
router.param("categoryId", categoryById);

module.exports = router;