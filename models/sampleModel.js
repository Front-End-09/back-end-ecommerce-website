import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Field first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Field last name is required"],
  },
  email: {
    type: String,
    required: [true, "Field email is required"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Field address is required"],
  },
  phone: {
    type: String,
    required: [true, "Field phone is required"],
  },
  file: {
    originalName: String,
    mimeType: String,
    path: String,
    size: Number
  },
}, {
  timestamps: true
});

export default mongoose.model('Customer', customerSchema);
