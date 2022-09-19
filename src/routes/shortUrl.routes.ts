import { Express } from 'express';
import { createShortUrl, handleRedirect, getNumberOfVisits } from '../controller/shortUrl.controller.js';

function routes(app: Express) {
    app.post('/api/url', createShortUrl);
    app.get('/api/:tinyUrl', handleRedirect);
    app.get('/api/url/:id', getNumberOfVisits);

}
export default routes;