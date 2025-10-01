#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg');

const SQL =`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL,
  admin BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS carts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) NOT NULL,
  creator VARCHAR ( 255 ) NOT NULL,
  cart_type VARCHAR ( 255 ) NOT NULL,
  platform VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_carts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER NOT NULL,
    cart_id INTEGER NOT NULL,
    status VARCHAR ( 255 ) NOT NULL DEFAULT 'bin',
    date_added DATE NOT NULL,
    date_started DATE,
    date_finished DATE,
    rating INTEGER
);
`;

async function main() {
    console.log('creating...');
    const client = new Client({
        connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();