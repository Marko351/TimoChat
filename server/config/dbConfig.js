const mongoose = require('mongoose');

const dbConfig = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
  const connection = await mongoose.connect(process.env.MONGO_URL, options);
  console.log(`Database connected`);
};

module.exports = dbConfig;
