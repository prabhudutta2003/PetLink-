const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `${uniqueSuffix}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Route for file upload and additional fields
app.post('/api/pet/adoption', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const fileInfo = {
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    path: req.file.path,
    createdAt: new Date(),
    typeOfPet: req.body.typeOfPet,
    age: req.body.age,
    breed: req.body.breed,
    healthCondition: req.body.healthCondition,
    temperament: req.body.temperament,
    vaccinationStatus: req.body.vaccinationStatus,
    history: req.body.history,
    currentEnvironment: req.body.currentEnvironment,
    contactInformation: req.body.contactInformation,
  };

  // Read current data from data.json
  let data = [];
  const dataFilePath = path.join(__dirname, 'data.json');
  try {
    if (fs.existsSync(dataFilePath)) {
      const dataJson = fs.readFileSync(dataFilePath);
      data = JSON.parse(dataJson);
    }

    // Append new fileInfo to data array
    data.push(fileInfo);

    // Write updated data back to data.json
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'File uploaded successfully', file: fileInfo });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
