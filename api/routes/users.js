import express from "express"
import { getUserPosts } from '../controllers/user.js';
import { getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getUserPosts);

export default router;