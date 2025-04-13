const mongoose = require('mongoose');
const balKand = require('../models/balKand.js');
const balKandSlokas = require('./BalkandSarg1.js') 

mongoose.connect('mongodb://localhost:27017/minor-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');})