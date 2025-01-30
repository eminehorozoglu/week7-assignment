import { db } from "./dbConnection.js";

db.query(
    `INSERT INTO mood (date, mood, daily_sentence, daily_note) VALUES ($1, $2, $3, $4)`,
    ['2025-01-30', 'Happy', 'Push yourself because no one is going to do it for you', 'Today was a wonderful, I saw my friend and it felt good to me']);
