const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(router);



(async function bootstrap () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/phonebook');
    console.log('Mongoose connected.');
    
    app.listen(3030, () => {
      console.log('Server is listening on port 3030.')
    })

  } catch (error) {
    console.log(error);
  }
})();
