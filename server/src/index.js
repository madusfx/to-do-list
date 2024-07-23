const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
