import express from 'express';

import { forgotPassword, getMe, login, logoutUser, registerUser, verifyUser } from '../controllers/User.controller.js';
import { isLogIn } from '../Middleware/User.middleware.js';
const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', login);
router.post('/getme', isLogIn ,getMe);
router.get('/logout', logoutUser);
router.post('/forgot', forgotPassword) 

export default router;
