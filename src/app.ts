import express, { Request, Response, NextFunction } from 'express';
import routes from './routes/shortUrl.routes.js';
import db from './db.js';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     const hash = crypto.createHash('sha256');
//     const finalHex = hash.update(JSON.stringify(req.body)).digest('hex');
//     res.locals.hash = { "SHA256": finalHex };
//     next();
// })

// app.use('/', (req: Request, res: Response, next: NextFunction) => {

//     res.send(res.locals.hash.SHA256);

// })
app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
    db();
    routes(app);
});



