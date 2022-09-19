import shortUrl from '../models/shortUrl.model.js';
import validUrl from 'valid-url';
import shorId from 'shortid';
export async function createShortUrl(req, res) {
    const { longUrl } = req.body;
    if (!validUrl.isUri(longUrl)) {
        return res.status(401).json('Invalid URL');
    }
    const tinyUrl = shorId.generate();
    const newUrl = await shortUrl.create({ longUrl, tinyUrl });
    return res.send(newUrl);
}
export async function handleRedirect(req, res) {
    const { tinyUrl } = req.params;
    const short = await shortUrl.findOne({ tinyUrl });
    if (!short)
        return res.sendStatus(404);
    else
        short.numberOfVisits++;
    short.save();
    return res.redirect(short.longUrl);
}
