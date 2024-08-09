const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

// Middleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true })); // Ensure extended is set

// Email sending function
function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER, 
        pass: process.env.PASS, 
      },
    });

    const mailOptions = {
      from: process.env.USER ,
      to: email,
      subject: subject,
      html: `
      <p>${message}</p>
      <p>Best Regards</p>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error); 
        return reject({ message: "An error occurred while sending the email." });
      }
      return resolve({ message: "Email sent successfully." });
    });
  });
}

// Route
app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
