const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log(`App is running on port ${this.address().port}`);
});
