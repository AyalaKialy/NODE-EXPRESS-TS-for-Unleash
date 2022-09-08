"use strict";
require('dotenv').config();
const PORT = process.env.PORT;
const ENVIRONMENT = process.env.ENVIRONMENT;
module.exports = { PORT, ENVIRONMENT };
