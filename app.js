const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());

// product schema

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
    validate: {
      validator: (value) => {
        const isInterger = Number.isInterger(value);
        if (isInterger) {
          return true;
        } else {
          return false;
        }
      },
      message: "Quantity must be integer",
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    suplliers: {
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
    ],
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timeStamps: true }
);

// timesStamps ture kore, dile, createdAt and UpdateAt auto pawya jay mongoose ei sudbida ta ache... moluto eta ekta option, _id: false jodi kono kichu na pai
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
