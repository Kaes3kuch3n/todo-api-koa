export abstract class ApiError {
    private readonly _statusCode: number;
    private readonly _status: string;
    private readonly _message: string | undefined;

    protected constructor(statusCode: number, status: string, message?: string) {
        this._statusCode = statusCode;
        this._status = status;
        this._message = message;
    }

    get message(): string {
        return this._message || this._status;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}

export class NotFound extends ApiError {
    constructor(message?: string) {
        super(404, "Not Found", message);
    }
}

export class BadRequest extends ApiError {
    constructor(message: string) {
        super(400, "Bad Request", message);
    }
}
