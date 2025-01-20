import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// The "models" object is provided by the Mongoose library and stores all the registered models.
// If a model with the name "User" already exists, use it. Otherwise, create a new model with the name "User".
// This prevents redefining the model and ensures that the existing model is reused.

// If a model name "User" does not exists in the "models" object, the "model" function from Mongose is called to create a new model with the name "User" and the UserSchema.

// The newly created model is then stored in the "models" object for future use.

const User = models.User || model("User", UserSchema);

export default User;
