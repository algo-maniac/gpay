const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    bankAccountNo: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    upiNumber: {
      type: Number,
      required: true,
    },
    upiId:{
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["User", "Admin"],
      required: true,
    },
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    // Add timestamps for when the document is created and last modified
  },
  { timestamps: true }
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)
