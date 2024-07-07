import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import SampleController from '../controllers/sampleController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Multer configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images')); // Adjust the destination path as needed
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

// Serve static files
const publicPath = path.join(__dirname, '../public'); // Adjust the public path as needed
const imagesPath = path.join(__dirname, '../images'); // Adjust the images path as needed
router.use('/public', express.static(publicPath));
router.use('/images', express.static(imagesPath));

// Define routes
router.get('/customers', SampleController.list);
router.post('/customers', upload.single('file'), SampleController.add);
router.post('/upload', upload.single('file'), SampleController.upload);

export default router;
