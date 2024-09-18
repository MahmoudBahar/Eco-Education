import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tempCode: {
    type: Number,
    required: false,
    default: null,
  },
  tempCodeCreatedAt: {
    type: Number,
    required: false,
    default: null,
  },
  activationCode: {
    type: Number,
    required: false,
    default: null,
  },
  activationStatus: {
    type: Boolean,
    required: false,
    default: false,
  },
});

userSchema.statics.signup = async function (
  email,
  password,
  name,
  activationCode
) {
  // validation
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }

  let exists = await this.findOne({ email });

  if (exists && exists.activationStatus) {
    throw Error('this email already exists');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.findOneAndUpdate(
    { email },
    {
      email,
      password: hash,
      name,
      activationCode,
    },
    {
      new: true,
      upsert: true, // Create a new document if one doesn't exist
      setDefaultsOnInsert: true,
    }
  );

  return user;
};

userSchema.statics.changePassword = async function (_id, password) {
  // validation
  if (!password) {
    throw Error('All fields must be filled');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.findByIdAndUpdate(
    { _id: _id },
    { password: hash, firstTime: false }
  );
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ email: email.toLowerCase() });
  console.log(user);

  if (user == null) {
    console.log('eq null');

    throw Error('Wrong email or password');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Wrong email or password');
  }

  return user;
};

export default mongoose.model('User', userSchema);
