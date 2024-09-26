const express = require('express');
const mongoose = require('mongoose');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/students', studentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Listen to the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
