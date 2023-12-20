import { Schema, Document, models, model } from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
}

const CatergorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Catergory = models.Category || model("Category", CatergorySchema);

export default Catergory;
