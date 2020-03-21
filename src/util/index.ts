import {Types} from "mongoose";

export function parseId(id: string) {
    try {
        return Types.ObjectId(id);
    } catch {
        return null;
    }
}
