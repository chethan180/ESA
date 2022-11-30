import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        productId: { type: String },
        category: { type: String },
        productName: { type: String },
        productModel: { type: String },
        price: { type: String },
        availableQuantity: { type: String },
      }
);

export default mongoose.model("product", productSchema);