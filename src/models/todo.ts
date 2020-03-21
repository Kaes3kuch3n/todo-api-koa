import {Document, model, Schema} from "mongoose";

export interface Todo extends Document {
    title: string;
    done: boolean;
}

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "is required"]
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    collection: "todos"
});

const todoModel = model<Todo>("todo", todoSchema);

export default todoModel;
