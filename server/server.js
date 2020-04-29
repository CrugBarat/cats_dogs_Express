const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const dogs = [
              {name: "Fluffy", breed: "Pomeranian"},
              {name: "Kane", breed: "Rottweiler"},
              {name: "Bonzo", breed: "German Shepherd"},
              {name: "Lucky", breed: "Cockapoo"},
              {name: "Luna", breed: "Husky"}
            ];

const cats = [
              { name: "Tiddles", breed: "Siberian" },
              { name: "Patch", breed: "Bengal" },
              { name: "Socks", breed: "British Shorthair" },
              { name: "Mr Bigglesworth", breed: "Persian" },
              { name: "Monty", breed: "Maine Coon" }
            ];            

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log(`App is running on port ${this.address().port}`);
});
