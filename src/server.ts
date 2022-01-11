import Koa from "koa";
import compress from "koa-compress";
import logger from "koa-logger";
import asyncBusboy from "async-busboy";
import mongoose from "mongoose";
import {port, db} from "./config";
import router from "./routes";
import {ApiError} from "./util/errors";

// Create server instance
const server = new Koa();

// Setup logging middleware
server.use(logger());

// Setup response compression
server.use(compress());

// Setup error handling
server.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        if (error instanceof ApiError) {
            ctx.status = error.statusCode;
            ctx.body = {error: error.message};
        }
    }
});

// Setup request body parsing
server.use(async (ctx, next) => {
    const contentType = ctx.request.headers["content-type"];
    if (contentType && (contentType.startsWith("multipart/form-data") ||
        contentType.startsWith("application/x-www-form-urlencoded"))) {
        const {files, fields} = await asyncBusboy(ctx.req);
        ctx.requestBody = fields;
        ctx.requestFiles = files;
    }
    await next();
});

// Setup database connection
mongoose.connect(`mongodb://${db.hostname}:${db.port}/${db.database}`).catch(error => {
    console.error("MongoDB connection failed:\n", error);
    process.exit(1);
    return;
});

// Use routes from router
server.use(router.routes()).use(router.allowedMethods());

// Start server to listen for incoming connections
server.listen(port, () => console.log(`Server listening on port ${port}...`));
