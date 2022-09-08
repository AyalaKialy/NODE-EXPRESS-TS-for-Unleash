import console from 'console';
import express, { Application, Request, Response, NextFunction } from 'express';

const crypto = require('crypto');
const app: Application = express();
const port: number = 3000;

app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
    const hash = crypto.createHash('sha256');
    const finalHex = hash.update(JSON.stringify(req.body)).digest('hex');
    res.locals.hash = { "SHA256": finalHex };
    next();
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {

    res.send(res.locals.hash.SHA256);

})

app.listen(port, () => console.log(`server is runing on port ${port}`));
