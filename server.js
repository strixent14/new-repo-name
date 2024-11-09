const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for sending email
app.post('/send-email', async (req, res) => {
  const { name, email, contact } = req.body;

  // Create a transporter using environment variables for security
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS,  // Use environment variable
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL_USER, // Your email from environment variable
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});