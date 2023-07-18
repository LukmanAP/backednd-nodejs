import express from "express";
import { getCats, getCatByID } from "../controller/CatsController.js";

const catsRoute = express.Router();

catsRoute.get("/cats", getCats);
catsRoute.get("/catid/:id_cat", getCatByID);

export default catsRoute;
