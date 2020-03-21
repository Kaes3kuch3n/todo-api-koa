import {Context} from "koa";
import Todo from "../models/todo";
import {parseId} from "../util";
import {NotFound} from "../util/errors";

export async function list(ctx: Context, next: () => Promise<any>) {
    ctx.body = await Todo.find();
    await next();
}

export async function get(ctx: Context, next: () => Promise<any>) {
    const id = ctx.params.id;
    const todo = await Todo.findById(parseId(id));
    if (todo == null)
        throw new NotFound(`Could not find todo item with id ${id}`);
    ctx.body = todo;
    await next();
}

export async function create(ctx: Context, next: () => Promise<any>) {
    const title = ctx.requestBody.title;
    const todo = new Todo({
        title: title,
        done: false
    });
    await todo.save();

    ctx.body = todo;
    await next();
}
