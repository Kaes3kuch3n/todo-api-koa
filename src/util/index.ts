import {Types} from "mongoose";

export function parseId(id: string) {
    try {
        return new Types.ObjectId(id);
    } catch {
        return null;
    }
}
