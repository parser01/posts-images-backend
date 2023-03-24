import Router from "express";
import PostsController from "../controllers/PostsController.js";

const postsRouter = new Router();

postsRouter.get("/posts", PostsController.getAll);
postsRouter.get("/posts/:id", PostsController.getOne);
postsRouter.post("/posts", PostsController.create);
postsRouter.put("/posts", PostsController.update);
postsRouter.delete("/posts/:id", PostsController.delete);

export default postsRouter;
