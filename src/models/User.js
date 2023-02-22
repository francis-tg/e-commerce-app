import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: [true, "Veuillez ajouter un nom d'utilisateur"]
    },
    password: {
      type: String,
      required: [true, "Le Mot de passe n'est pas optionnel"]
    }
  },
  {timestamps: true}
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
