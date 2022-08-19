import mongoose from "mongoose";

const CallSchema = new mongoose.Schema(
  {
    ticker: { type: String, required: true },
    host: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Call", CallSchema);
