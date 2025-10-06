#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg');

const SQL =`
    INSERT INTO carts (title, creator, cart_type, platform) VALUES
    ('The Legend of Zelda: A Link to the Past', 'Nintendo', 'gamecart', 'snes'),
    ('Hollow Knight', 'Team Cherry', 'gamecart', 'pc'),
    ('Tokyo These Days: Volumes 1–3', 'Taiyo Matsumoto', 'bookcart', 'manga'),
    ('Ready Player Two', 'Ernest Cline', 'bookcart', 'novel'),
    ('Super Mario Land', 'Nintendo', 'gamecart', 'gbc'),
    ('Annihilation', 'Jeff VanderMeer', 'bookcart', 'novel'),
    ('Ambush at Corellia (Star Wars: The Corellian Trilogy #1)', 'Roger MacBride Allen', 'bookcart', 'novel'),
    ('Stranger Things: Season 5', 'Duffer Brothers', 'videocart', 'show'),
    ('Chrono Trigger', 'Square', 'gamecart', 'snes'),
    ('Dune', 'Frank Herbert', 'bookcart', 'novel'),
    ('Pokémon Crystal', 'Game Freak', 'gamecart', 'gbc'),
    ('Dungeon Crawler Carl', 'Matt Dinniman', 'bookcart', 'novel'),
    ('Petr: A Star Folk Saga', 'Christopher L Meyer', 'bookcart', 'novel');

    INSERT INTO users (username, password, admin) VALUES
    ('cobbland', 'gravy', true),
    ('otheruser', '123', false);

    INSERT INTO users_carts (user_id, cart_id, status, date_added, date_started, date_finished, rating) VALUES
    (1, 1, 'playlist', '2025-08-09', '2025-08-09', NULL, NULL),
    (1, 2, 'playlist', '2025-09-16', '2025-09-16', NULL, NULL),
    (1, 3, 'shelf', '2025-08-01', '2025-08-01', '2025-08-01', 2),
    (1, 4, 'shelf', '2025-08-01', '2025-08-01', '2025-08-09', 2),
    (1, 5, 'bin', '2025-08-10', NULL, NULL, NULL),
    (1, 6, 'shelf', '2025-08-01', '2025-08-02', '2025-08-08', 2),
    (1, 7, 'shelf', '2025-09-01', '2025-09-04', '2025-09-08', 1),
    (1, 8, 'bin', '2025-10-01', NULL, NULL, NULL),
    (1, 9, 'bin', '2025-09-05', NULL, NULL, NULL),
    (1, 10, 'bin', '2025-10-01', NULL, NULL, NULL),
    (1, 11, 'shelf', '2025-07-02', '2025-07-10', '2025-07-16', 2),
    (1, 12, 'shelf', '2025-09-05', '2025-09-09', '2025-09-15', 2),
    (1, 13, 'shelf', '2025-09-20', '2025-09-25', '2025-10-02', 2);
`;

async function main() {
    console.log('populating...');
    const client = new Client({
        connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();