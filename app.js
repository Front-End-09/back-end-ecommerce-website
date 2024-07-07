import express from 'express';
import path from 'path';
import cors from 'cors';
import connectdb from './db/connectdb.js';
import web from './routes/web.js';

const app = express();
app.use(cors());
app.use(express.json());

// Set port of back-end
const port = process.env.PORT || '8000'; // Change the port number if needed

// Connect to the database
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://Suonty:Tyty1080@first-apii.rqmmjsa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=first-apii';

// Database Connection
connectdb(DATABASE_URL);

// Load Routes
app.use("/api", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
