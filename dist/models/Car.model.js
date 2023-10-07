"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    model: {
        type: String,
        required: true,
        min: 1,
        max: 15,
    },
    year: {
        type: Number,
        required: true,
        min: 1950,
        max: 2023,
    },
    producer: {
        type: String,
        required: true,
        min: 1,
        max: 15,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Car = (0, mongoose_1.model)("/cars", carSchema);
