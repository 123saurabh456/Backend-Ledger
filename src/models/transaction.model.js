const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    fromAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: [true, "Trensaction must be associated to a From account."],
      index: true,
    },
    toAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: [true, "transaction must be associated with a to account"],
      index: true,
    },
    status: {
      type: String,
      enum: {
        values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
        message: "Status can either be PENDING, COMPLETED, FAILED or REVERSED",
      },
      default: "PENDING",
    },
    amount: {
      type: Number,
      required: [true, "Amount is required to complete a transacton."],
      min: [0, "Transaction can not be made in negative amount."],
    },
    idempotencyKey: {
      type: String,
      required: [true, "Idempotency key is required for creating a transaction."],
      index: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);



const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;