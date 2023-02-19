/* istanbul ignore file */
const { Pool } = require('pg');

const testconfig = {
  host: process.env.PGHOST_TEST,
  port: process.env.PGPORT_TEST,
  user: process.env.PGUSER_TEST,
  password: process.env.PGPASSWORD_TEST,
  database: process.env.PGDATABASE_TEST,

};

const pool = process.env.NODE_ENV === 'test' ? new Pool(testconfig) : new Pool();

module.exports = pool;
