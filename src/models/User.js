const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  idade: String,
  sexo: String,
  celular: String,
  email: String,
  instagram: String,
  facebook: String,
  horario: String
});

module.exports = mongoose.model('User', UserSchema);