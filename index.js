const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const app = express();
const PORT = process.env.PORT || 4000;


// --- middleware ---
app.use(morgan('dev')); // tiny - dev
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.listen(PORT, () => {
  debug(`Listening on port ${chalk.green(PORT)}`);
});