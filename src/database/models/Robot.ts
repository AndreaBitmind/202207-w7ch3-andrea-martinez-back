import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
