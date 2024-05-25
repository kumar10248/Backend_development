const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  uid: { type: String, unique: true },
  section: String,
  group: String,
  batch: String,
  
});

module.exports = mongoose.model('Student', studentSchema);
