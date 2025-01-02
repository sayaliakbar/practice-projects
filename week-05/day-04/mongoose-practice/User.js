import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  street: String,
  city: String,
  country: String,
});

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    minLength: 10,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    validate: {
      validator: Number.isInteger,
      message: (props) => `${props.value} must be an integer`,
    },
  },
  createdAt: { type: Date, default: () => new Date(), immutable: true },
  updatedAt: { type: Date, default: () => new Date() },
  bestFriend: { type: Schema.Types.ObjectId, ref: "User" },
  hobbies: [String],
  address: addressSchema,
});

// Instance methods
// Define a method on the userSchema that will be available on all instances of the model
userSchema.methods.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Static methods
// Define a method on the userSchema that will be available on the model itself
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// Query helpers
// Define a query helper on the userSchema that will be available on all queries
// Query helpers are chainable
// A query is a function that returns a query object
userSchema.query.byName = function (name) {
  return this.where({ name });
};

// Virtuals
// Define a virtual property on the userSchema that will be available on all instances of the model
// Virtuals are properties that are not stored in MongoDB
// Virtuals are computed properties

userSchema.virtual("fullName").get(function () {
  return `${this.name} ${this.email}`;
});

export default model("User", userSchema);
