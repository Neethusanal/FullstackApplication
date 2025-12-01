import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    productCode: {
      type: String,
      required: true,
      unique: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: null,
    },

    description: {
      type: String,
      required: true,
    },

   category: {
  type: String,
  required: true,
  enum: ["Necklace", "Earrings", "Bangles", "Rings", "Bracelet", "Sets", "chokers", "Long Harams" ,"Other"],
},

subcategory: {
  type: String,
  default: "",
  
},


    images: {
      type: [String],
      required: true,
    },

    availableColors: {
      type: [String],
      default: [],
    },

    material: {
      type: String,
      default: "",
    },

    stoneType: {
      type: String,
      default: "",
    },

    platingType: {
      type: String,
      default: "",
    },

    size: {
      type: String,
      default: "",
    },

    weight: {
      type: String, // can also be Number
      default: "",
    },

    style: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    soldCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);


