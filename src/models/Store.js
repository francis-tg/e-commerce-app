import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez préciser le nom de la boutique"]
    },
    address: {
      type: String,
      required: [true]
    },
    contact: {
      type: String,
      required: [true]
    }
  },
  {timestamps: true}
);

export default mongoose.models.Store || mongoose.model("Store", StoreSchema);
