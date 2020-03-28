const { Schema, model } = require('mongoose');

const UserShema = new Schema(
  {
    username: {
      type: String,
      require: [true, 'Password required'],
    },
    email: {
      type: String,
      unique: [true, 'User with that email allready created'],
      require: [true, 'Email required'],
      match: [
        /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i,
        'Please enter valid email',
      ],
    },
    password: {
      type: String,
      require: [true, 'Password required'],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model('Users', UserShema);

module.exports = userModel;
