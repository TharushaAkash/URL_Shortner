import express from "express";
import { createUrl, redirectUrl } from "../controller/createUrl.js";

const url_router = express.Router();

url_router.post('/', createUrl);
url_router.get('/:short_url', redirectUrl);

export default url_router;