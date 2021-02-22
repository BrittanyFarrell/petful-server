/* eslint-disable strict */
require('dotenv').config();

module.exports = {
  CLIENT_ORIGIN : process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  PORT: process.env.PORT || 8086,
  NODE_ENV: process.env.NODE_ENV || 'development'
};