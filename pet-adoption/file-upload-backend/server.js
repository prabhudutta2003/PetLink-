// // Example server-side code with Express
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const PORT = 5000;

// // Multer configuration for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads'); // Destination folder for uploaded files
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`); // Generate unique filename
//   }
// });

// const upload = multer({ storage: storage });

// // Handle POST request for pet adoption form submission
// app.post('/api/pet/adoption', upload.single('photo'), (req, res) => {
//   // Process form data and uploaded file
//   const { typeOfPet, age, breed, healthCondition, temperament, vaccinationStatus, history, currentEnvironment, contactInformation } = req.body;
//   const photoPath = req.file.path;

//   // Save data to database or perform further processing
//   // Example: Saving to a JSON file
//   const adoptionData = {
//     typeOfPet,
//     age,
//     breed,
//     healthCondition,
//     temperament,
//     vaccinationStatus,
//     history,
//     currentEnvironment,
//     contactInformation,
//     photoPath // Store path to the uploaded photo
//   };

//   fs.writeFileSync('petAdoptionData.json', JSON.stringify(adoptionData, null, 2)); // Example: Save to JSON file

//   res.json({ message: 'Pet adoption details saved successfully.' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
