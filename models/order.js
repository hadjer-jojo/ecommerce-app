const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    customer: {
      firstName: String,
      lastName: String,
      phone: String,
      wilaya: String,
      address: String,
    },
    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalPrice: Number,
    deliveryType: { type: String, default: "home" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = model("Order", OrderSchema);
module.exports = Order;
