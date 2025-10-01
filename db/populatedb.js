#! /usr/bin/env node

require('dotenv').config()

const { Client } = require('pg');

const SQL =`
    INSERT INTO carts (title, creator, cart_type, platform) VALUES
    ('The Legend of Zelda', 'Nintendo', 'gamecart', 'nes'),
    ('Final Fantasy VII', 'Square Enix', 'gamecart', 'ps1'),
    ('Death Note', 'Tsugumi Ohba', 'bookcart', 'manga'),
    ('The Witcher 3', 'CD Projekt Red', 'gamecart', 'pc'),
    ('Breaking Bad', 'Vince Gilligan', 'videocart', 'show'),
    ('1984', 'George Orwell', 'bookcart', 'novel'),
    ('Super Mario Land', 'Nintendo', 'gamecart', 'gbc'),
    ('Spirited Away', 'Studio Ghibli', 'videocart', 'movie'),
    ('Attack on Titan', 'Hajime Isayama', 'bookcart', 'manga'),
    ('Cyberpunk 2077', 'CD Projekt Red', 'gamecart', 'pc'),
    ('The Great Gatsby', 'F. Scott Fitzgerald', 'bookcart', 'novel'),
    ('Dark Souls', 'FromSoftware', 'gamecart', 'pc'),
    ('Stranger Things', 'Duffer Brothers', 'videocart', 'show'),
    ('Naruto', 'Masashi Kishimoto', 'bookcart', 'manga'),
    ('Chrono Trigger', 'Square', 'gamecart', 'snes'),
    ('The Matrix', 'Wachowskis', 'videocart', 'movie'),
    ('Dune', 'Frank Herbert', 'bookcart', 'novel'),
    ('Castlevania', 'Konami', 'gamecart', 'nes'),
    ('Cowboy Bebop', 'Shinichirō Watanabe', 'videocart', 'show'),
    ('Pokémon Red', 'Game Freak', 'gamecart', 'gbc');

    INSERT INTO users (username, password, admin) VALUES
    ('alice', 'password123', false),
    ('bob', 'hunter2', true),
    ('charlie', 'qwerty', false),
    ('diana', 'letmein', false),
    ('eve', 'trustno1', true),
    ('frank', 'adminpass', false),
    ('grace', 'ilovecats', false),
    ('heidi', 'sunshine', true),
    ('ivan', '12345678', false),
    ('judy', 'password1', false);

    INSERT INTO users_carts (user_id, cart_id, status, date_added, date_started, date_finished, rating) VALUES
    (1, 4, 'bin', '2025-09-01 10:00:00', NULL, NULL, NULL),
    (2, 8, 'bin', '2025-09-05 14:20:00', NULL, NULL, NULL),
    (3, 2, 'playlist', '2025-09-10 12:00:00', '2025-09-09 18:00:00', NULL, NULL),
    (4, 5, 'playlist', '2025-09-15 16:30:00', '2025-09-15 15:00:00', NULL, NULL),
    (5, 1, 'shelf', '2025-08-10 08:30:00', '2025-08-01 12:00:00', '2025-08-09 20:00:00', 4),
    (6, 7, 'shelf', '2025-07-12 09:00:00', '2025-07-01 14:00:00', '2025-07-11 19:00:00', 3),
    (7, 13, 'shelf', '2025-09-01 11:00:00', '2025-08-25 17:00:00', '2025-08-31 22:00:00', 2),
    (8, 6, 'trash', '2025-08-20 10:00:00', '2025-08-15 09:00:00', '2025-08-19 13:00:00', NULL),
    (9, 10, 'trash', '2025-09-05 13:30:00', '2025-09-01 12:00:00', '2025-09-04 17:00:00', NULL),
    (10, 3, 'bin', '2025-10-01 10:00:00', NULL, NULL, NULL),
    (1, 9, 'playlist', '2025-09-28 11:30:00', '2025-09-27 14:00:00', NULL, NULL),
    (2, 11, 'shelf', '2025-08-20 08:00:00', '2025-08-10 10:00:00', '2025-08-18 16:00:00', 1);
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