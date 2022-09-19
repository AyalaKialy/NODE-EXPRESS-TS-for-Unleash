import { createShortUrl, handleRedirect } from '../controller/shortUrl.controller.js';
function routes(app) {
    app.post('/api/url', createShortUrl);
    app.get('/:tinyUrl', handleRedirect);
}
export default routes;
