import { model, Schema } from "mongoose";

const carSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Car = model("/cars", carSchema);
