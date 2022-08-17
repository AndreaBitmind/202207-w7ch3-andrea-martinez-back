"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(statusCode, message, publicMessage) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.publicMessage = publicMessage;
    }
}
exports.default = CustomError;
