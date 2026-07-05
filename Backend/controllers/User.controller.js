import User from '../models/User.model.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    console.log('Email:', email);
    // check if already register
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'User already registered',
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log('Created User:', user);
    // verification
    const token = crypto.randomBytes(32).toString('hex');
    console.log('Token:', token);

    user.verification = token;
    await user.save();
    // send mail
    //   const nodemailer = require('nodemailer');

    //   // Create a transporter using SMTP
    //   const transporter = nodemailer.createTransport({
    //     host: process.env.MAILTRAP_HOST,
    //     port: process.env.MAILTRAP_PORT,
    //     secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    //     auth: {
    //       user: process.env.MAILTRAP_USER,
    //       pass: process.env.MAILTRAP_PASSWORD,
    //     },
    //   });
    //   const mailOption = {
    //     from: process.env.MAILTRAP_SENDER, // sender address
    //     to: user.email, // list of recipients
    //     subject: 'verify your email', // subject line
    //     text: `Please click on the link:
    //     ${process.env.BASE_URL}/api/v1/users/verify/${token}
    //      `,
    //   };
    //   await transporter.sendMail(mailOption);

    res.status(201).json({
      message: 'User registered successfully',
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'User not registered',
      success: false,
      error: error.message,
    });
  }
  // create user in database
  // create verification token
  // save token in data base
  // send success status to user
};
