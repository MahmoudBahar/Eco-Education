import express from 'express';

import {
  validateUser,
  createUser,
  changePW,
  forgotPassword,
  resetPassword,
  activateAccount,
} from '../controllers/userController.js';

import { requireAuth } from '../middlewares/requireAuth.js';

const router = express.Router();

router.post('/login', validateUser);
router.post('/register', createUser);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword', resetPassword);
router.patch('/activate', activateAccount);

router.post('/change-pw', requireAuth, changePW);

export default router;
