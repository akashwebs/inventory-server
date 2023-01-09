/* const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      require: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "please provide a name for this product"],
      trim: true,
      lowercase: true,
      unique: [true, "product name can't be same"],
      minLength: [3, "Name must be at least 3 charecter"],
      maxLength: [100, "name is too large"],
    },
    description: {
      type: String,
      required: true,
    },

    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit value can't be {VALUE}, must be kg, litre, pcs",
      },
    },

    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (values) => {
            if (!Array.isArray(values)) {
              return false;
            }
            let isValid = true;
            values.forEach((value) => {
              if (!validator.isURL(value)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide a valid url",
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      min: [0, "Product price can not negative "],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "product quantity can not negative "],
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be{VALUE}",
      },
    },
    store: {
      name: {
        type: String,
        required: [true, "Please provide a brand name"],
        trim: true,
        lowercase: true,
        enum: {
          values: [
            "dhaka",
            "chattogram",
            "rajshahi",
            "sylhet",
            "khulna",
            "barishal",
          ],
          message: "{VALUE} is not a valid name",
        },
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Store",
      },
    },
    suppliedBy: {
      name: {
        type: String,
        trim: true,
        required: [true, "please provide a supplier name"],
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
  },
  { timestamps: true }
);
 */
// timesStamps ture kore, dile, createdAt and UpdateAt auto pawya jay mongoose ei sudbida ta ache... moluto eta ekta option, _id: false jodi kono kichu na pai

// schema>model>query

// const Product = mongoose.Model("Product", productSchema); //this is model

// two middle awre pre/post

/* productSchema.pre("save", function (next) {
  if (this.quantity) {
    this.quantity = 20;
  }

  next();
});
 */
/* productSchema.post("save", function (doc, next) {
  console.log("after save");
  next();
});
 */

/* // instance middleawere
stockSchema.methods.anyCounter = function () {
  console.log(`name is ${this.name}`);
}; */

/* const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock; */
