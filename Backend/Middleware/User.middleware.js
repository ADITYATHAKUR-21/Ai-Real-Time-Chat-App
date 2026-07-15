import jwt from 'jsonwebtoken';

export const isLogIn = async (req, res, next) => {
  try {
    console.log(req.cookies);

    const token = req.cookies?.token;

    console.log('Token Found:', token ? 'Yes' : 'No');

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log('Decoded Data:', decoded);

    req.user = decoded;

    return next();
  } catch (error) {
    console.error('Auth failed:', error);

    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};
