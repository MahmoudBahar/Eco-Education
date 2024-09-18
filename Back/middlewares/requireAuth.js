import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findOne({ _id }).select('_id');
    const { activationStatus } = await User.findOne({ _id }).select(
      'activationStatus'
    );

    // check activation status
    if (!activationStatus) {
      return res.status(401).json({
        message:
          'Account is not activated, please activate your account and try again',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

export { requireAuth };
