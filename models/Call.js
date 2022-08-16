import mongoose from "mongoose";

const CallSchema = new mongoose.Schema(
  {
    Ticker: { type: String, required: true },
    Host: { type: String, required: true },
    Url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Call", CallSchema);
