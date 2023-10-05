"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexConstants = void 0;
exports.regexConstants = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
};
