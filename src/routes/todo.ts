import Router from "koa-router";
import * as todoController from "../controllers/todo";

const router = new Router();

router.get("/", todoController.list);

router.get("/:id", todoController.get);

router.post("/", todoController.create);

export default router;
