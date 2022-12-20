const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name for this product"],
      trim: true,
      unique: [true, "product name can't be same"],
      minLength: [3, "Name must be at least 3 charecter"],
      maxLength: [100, "name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "product price can't be negative"],
      max: [10000, "price so high"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg, litre, pcs",
      },
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    quantity: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "quantity must be interger",
    },
    /*  suplliers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supllier",
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ], */
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

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

// instance middleawere
productSchema.methods.anyCounter = function () {
  console.log(`name is ${this.name}`);
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
