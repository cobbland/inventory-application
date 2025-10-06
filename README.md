# Inventory Application

A database webapp project, made as part of The Odin Project. It uses [Express](https://expressjs.com), [PostgreSQL](https://www.postgresql.org), [EJS](https://ejs.co), [node-postgres](https://node-postgres.com), and [dotenv](https://www.npmjs.com/package/dotenv).

## Media System Database

This example database webapp catalogues my media consumption—books, shows, and games. (See [cobb.land/media](https://cobb.land/media/) for an example of how I do this without a database.)
[text](about:blank#blocked)
There are users. There are carts. Each user has carts. Each cart a user has can have one of four states: playlist, shelf, bin, and trash.

### Media System Database Structure

**Carts**

| id  | title | creator | cart_type | platform |
| --- | ----- | ------- | --------- | -------- |
|     |       |         |           |          |

**Users**

| id  | username | password | admin |
| --- | -------- | -------- | ----- |
|     |          |          |       |

**User Carts**

| id  | user_id | cart_id | status | date_added | date_started | date_finished | rating |
| --- | ------- | ------- | ------ | ---------- | ------------ | ------------- | ------ |
|     |         |         |        |            |              |               |        |

### Todo

- [x] Add editing functions
- [x] Improve user cart editing
- [ ] Add error pages
- [ ] Add sorting
- [ ] Add average review score on cart pages
- [ ] Add score and level to users