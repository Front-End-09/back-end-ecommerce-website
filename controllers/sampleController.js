import Customer from '../models/sampleModel.js';
import express from "express";
const app = express();

import cors from "cors";
app.use(cors());
class SampleController {
  // List customers
  static async list(req, res) {
    try {
      const customers = await Customer.find({});
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add customer
  static async add(req, res) {
    try {
      const { firstName, lastName, email, address, phone } = req.body;
      const { originalname, mimetype, filename, path: filePath, size } = req.file;

      // Create a new customer record with file details
      const newCustomer = await Customer.create({
        firstName,
        lastName,
        email,
        address,
        phone,
        file: {
          originalName: originalname,
          mimeType: mimetype,
          path: `http://localhost:8000/public/${filename}`, // Store the relative path
          size: size
        }
      });

      // Respond with the newly created customer including file details
      res.status(201).json({
        message: 'Customer added successfully',
        customer: newCustomer,
        file: {
          fieldname: req.file.fieldname,
          originalname: originalname,
          encoding: req.file.encoding,
          mimetype: mimetype,
          destination: req.file.destination,
          filename: filename,
          path: filePath,
          size: size
        }
      });
    } catch (error) {
      console.error('Error adding customer:', error);
      res.status(500).json({ message: 'Error adding customer', error: error.message });
    }
  }

  // Upload image
  static async upload(req, res) {
    res.json({
        success: 1,
        profile_url: `http://localhost:4000/images/${req.file.filename}`
    })
  }
}

export default SampleController;
