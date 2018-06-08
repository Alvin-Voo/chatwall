const mongoose = require('mongoose');
const dbdomain = process.env.MONGODB_URI;
const dbname = process.env.MONGODB_DBNAME;

if(dbname){
  mongoose.connect(dbdomain,{dbName: dbname})
}
else mongoose.connect(dbdomain);



module.exports = mongoose;
