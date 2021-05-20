const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  apellidos: { type: String, required: true},
  nombres: { type: String, required: true},
  dni: {type: String, required: true},
  password: { type: String, required: true },
  voted: { type: Number, default: null }
});

UserSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
      const document = this;
      bcrypt.hash(this.password, saltRounds, function(err, hashedPassword) {
        if (err) {
          next(err);
        } else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });
  
  UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }

module.exports = mongoose.model('User', UserSchema);