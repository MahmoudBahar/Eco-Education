import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { sendEmail } from '../utils/email.js';
import { default as emailValidator } from 'email-validator';
import validator from 'validator';
import _ from 'underscore-contrib';
dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const createUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!emailValidator.validate(email)) {
    return res.status(400).json({
      message: 'invalid email address',
    });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      message: 'use strong password',
    });
  }

  try {
    const activationCode = Math.floor(100000 + Math.random() * 900000);

    const user = await User.signup(email, password, name, activationCode);
    const token = createToken(user._id);

    // send activation email
    const message = `Hello ${name},\nWelcome to Portal, please use the following code as your activation code: \n${activationCode}\nWe hope you enjoy our web app.\nPortal Support Team`;

    await sendEmail({
      email: user.email,
      subject: '🔔 Your Account Activation Code',
      message,
    });

    res.status(201).json({
      _id: user._id,
      token,
      name: user.name,
      message: 'activatin code was sent to email',
    });
  } catch (err) {
    next(err);
  }
};

const changePW = async (req, res, next) => {
  const { _id, password } = req.body;
  try {
    const user = await User.changePassword(_id, password);
    console.log(user);
    res.status(201).json({ _id: user._id, msg: 'Changed Successfully' });
  } catch (err) {
    next(err);
  }
};

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      token,
      name: user.name,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  let user;
  try {
    if (!email) {
      return res.status(400).json({
        message: 'please provide a valid email',
      });
    }

    user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    user.tempCode = Math.floor(100000 + Math.random() * 900000);
    user.tempCodeCreatedAt = Date.now();
    await user.save();

    const message = `Hello ${user.name},\nForgot your password? Use the following code as your temporary code: \n${user.tempCode}\nIf you didn't ask for this request, please ignore this email.\nPortal Support Team`;

    await sendEmail({
      email: user.email,
      subject: '🔔 Your password reset code (valid for 5 min)',
      message,
    });

    res.status(200).json({
      message: 'temporary code sent to email!',
    });
  } catch (err) {
    console.log(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { tempCode, email, password } = req.body;
  try {
    let user;
    if (!email) {
      return res.status(400).json({
        message: 'Invalid request',
      });
    }
    if (email) {
      user = await User.findOne({
        email,
        tempCode,
        tempCodeCreatedAt: {
          $gt: Date.now() - 300000,
          $lt: Date.now(),
        },
      });
    }

    if (!user) {
      return res.status(404).json({
        message: 'Temporary code is invalid or has expired',
      });
    }
    console.log(user);

    await User.changePassword(user._id, password);

    user.tempCode = undefined;
    user.tempCodeCreatedAt = undefined;
    await user.save();

    res.status(201).json({
      _id: user._id,
      message: 'password changed Successfully',
    });
  } catch (err) {
    res.status(400).json({
      message: 'Please user a strong password',
    });
    console.log(err);
  }
};

const activateAccount = async (req, res, next) => {
  const { _id, activationCode } = req.body;
  try {
    const user = await User.findOne({
      _id,
      activationCode,
    });

    if (!user) {
      return res.status(404).json({
        message: 'wrong activation code',
      });
    }

    user.activationStatus = true;
    user.activationCode = undefined;

    await user.save();

    res.status(200).json({
      _id,
      message: 'Account activated succefully',
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

export {
  createUser,
  validateUser,
  changePW,
  forgotPassword,
  resetPassword,
  activateAccount,
};
