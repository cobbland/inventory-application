#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg');

const SQL =`
DROP TABLE users;

DROP TABLE carts;

DROP TABLE users_carts;
`;

async function main() {
    console.log('deleting...');
    const client = new Client({
        connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();