require("dotenv").config();

import express from 'express';
import consign from 'consign';
var bodyParser = require('body-parser');
const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
// Routes
consign({cwd: __dirname})
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .then('controllers')
  .into(app);