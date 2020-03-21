import Router from "koa-router";
import todoRouter from "./todo";

const router = new Router({prefix: "/api"});

router.use("/todo", todoRouter.routes(), todoRouter.allowedMethods());

export default router;
