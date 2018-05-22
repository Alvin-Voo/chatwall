const mongoose = require('mongoose');
const dbdomain = process.env.MONGODB_URI;

mongoose.connect(dbdomain);

module.exports = mongoose;
