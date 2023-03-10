const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
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
        message: "status can't be {VALUE}",
      },
    },
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

/* 
  quantity validator, is integer or not
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



    

 */

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
