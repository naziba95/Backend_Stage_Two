const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const personRoute = require('./routes/personRoute');
require('dotenv').config()



//middlewware to allow us parse json data
app.use(express.json());


app.use('/api', personRoute);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
