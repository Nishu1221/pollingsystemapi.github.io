const mongoose = require('mongoose');

const uri = 'mongodb://username:password@localhost:27017/database';

const connectWithDb = () => {
  mongoose.connect('mongodb://localhost:27017/polling-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb
