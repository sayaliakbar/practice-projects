import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: () => new Date() },
});

export default mongoose.model("Grocery", grocerySchema);
