import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,

    role: {
      type: String,
      enum: ['user', 'Admin'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpiry: {
      type: Date,
    },
    verification: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  if (this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('User', userSchema);

export default User;
