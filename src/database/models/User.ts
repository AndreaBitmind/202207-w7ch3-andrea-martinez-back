import { model, Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  urlImg: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  robots: [{ type: Schema.Types.ObjectId, ref: "Robot" }],
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    const newDocument = { ...ret };
    delete newDocument.password;
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument.__v;
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument._id;
    return newDocument;
  },
});

const User = model("User", userSchema, "users");

export default User;
