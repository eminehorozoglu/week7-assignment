import express from "express";
import cors from "cors";

import { db } from "./dbConnection.js";

const app = express();
app.use (express.json());
app.use (cors());

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${(PORT)}`);
});
app.get("/",(_,res) => {
    res.json({message:"This is the root route."});
    });

    app.get("/mood", async (req,res) => {
        const query = await db.query (`select * from mood`);
        await res.json(query.rows);
    });
 
    app.post("/new-data", async(req, res) =>{
        console.log("Request body:", req.body);
        const data = req.body;
        const query = await db.query(`
            INSERT INTO mood (date, mood, daily_sentence, daily_note) 
            VALUES($1, $2, $3, $4)`, 
            [data.formValues.date, data.formValues.mood, data.formValues.dailySentence, data.formValues.dailyNote]); 
        await res.json({
            message: "The data was added successfully", 
            data: query.rows})
    });
   