import express from 'express';
import routes from './routes/routes.js';
import db from './db.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    db();
    routes(app);
});
