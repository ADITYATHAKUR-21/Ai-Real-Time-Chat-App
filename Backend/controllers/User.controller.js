import User from '../models/User.model.js';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { json } from 'stream/consumers';
import dotenv from 'dotenv'

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required',
      });
    }

    
   
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
};

export const verifyUser = async (req, res) => {
  // rgt token from url
  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: 'Invalid token',
    });
  }

  const user = await User.findOne({ verification: token });

  if (!user) {
    return res.status(400).json({
      message: 'Invalid token',
    });
  }
  user.isVerified = true;
  user.verification = undefined;

  await user.save();
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'All filed are required ',
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: 'invalid email or password',
      });
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Password is wrong ',
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    const cookieOption = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie('token', token, cookieOption);

    res.status(200).json({
      success: true,
      message: 'Login successfully',
      token,
      user: {
        id: user._id,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: 'User is not login',
    });
  }
};

export const getMe = async (req,res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')

    if(!user){
      return res.status(400).json({
        succuss: false,
        message: "User is not found"
      })
    }
    res.status(200).json({
      success: true,
      user,
    });

    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User  not get"
    })
    
  }
} 

export const logoutUser = (req,res) => {
  try {
    res.cookie('token', '');
     return res.status(200).json({
      success: true,
      message: "User logout "
     });


    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "User log out issue"
    });
    
  }
}

export const forgotPassword = async(req,res) =>  {
  try {
    
  } catch (error) {
    
  }
}