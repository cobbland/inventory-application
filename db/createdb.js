#! /usr/bin/env node

const { Client } = require('pg');

const SQL =`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ) UNIQUE,
  password VARCHAR ( 255 ),
  admin BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS carts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  creator VARCHAR ( 255 ),
  cart_type VARCHAR ( 255 ),
  platform VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS users_carts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER,
    cart_id INTEGER,
    status VARCHAR ( 255 ),
    date_added DATE,
    date_started DATE,
    date_finished DATE,
    rating INTEGER
);
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        // connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
        // connectionString: "postgresql://jacob:753694@localhost:5432/inventory_application",
        connectionString: process.argv[2],
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();

// run with `node db/createdb.js postgresql://jacob:753694@localhost:5432/inventory_application`.