import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Account", accountSchema);
