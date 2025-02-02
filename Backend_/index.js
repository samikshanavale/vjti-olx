const express =require("express");
const mongoose =require("mongoose");
const cors= require("cors");
const path = require ("path");
const nodemailer = require("nodemailer");
// console.log(__dirname);
const app = express();
app.use(express.json());
const userRoute = require('./routes/Userapi')
const productRoute = require('./routes/Product')
const PORT = 5000;
// const uri = 'mongodb+srv://samikshanavale43:Samiksha@cluelesscoders.zeaot.mongodb.net/?retryWrites=true&w=majority&appName=cluelesscoders'
const uri = 'mongodb+srv://samikshanavale43:Samiksha@cluelesscoders.zeaot.mongodb.net/?retryWrites=true&w=majority&appName=CluelessCoders/VJTIOLX'

// routes
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB not connected", err);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

// Serve static files from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use('/api',userRoute)
app.use('/api/p1',productRoute)

const transporter = nodemailer.createTransport({
  service: "gmail", // Or any email service you're using
  auth: {
    user: "samikshanavale43@gmail.com",  // Replace with your email
    pass: "wumh tuxo xaan blis"    // Replace with your email password or use OAuth2 for more security
  }
});

// Send email function
const sendEmail = async (to, subject, text, html) => {
  try {
    // console.log(text)
    const info = await transporter.sendMail({
      from: '"VJTI OLX" <samikshanavale43@gmail.com>', // sender address
      to, // receiver's email address
      subject, // subject line
      text, // plain text body
      html, // HTML body
    });
    // console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

//Email Sent

app.post('/sendEmail', async (req, res) => {
  const { to, subject, text, html } = req.body;

  if (!to || !subject || !text) {
      return res.status(400).json({ message: "Missing required fields" });
  }

  try {
      await sendEmail(to, subject, text, html);
      res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
});

module.exports = { sendEmail };


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })

