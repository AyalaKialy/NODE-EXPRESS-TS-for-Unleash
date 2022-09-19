import { createShortUrl, handleRedirect, getAnalytics, getShortUrl } from "../controller/shortUrl.controller";
import validateResourse from "../middleware/validateResourse";
import shortUrlSchema from "../schemas/createShortUrl.schema";
function routes(app) {
    app.get("/healthcheck", (req, res) => {
        return res.send("App is healthy");
    });
    app.post("/api/url", validateResourse(shortUrlSchema), createShortUrl);
    app.get("/:shortId", handleRedirect);
    app.get("/api/url/:shortId", getShortUrl);
    app.get("/api/analytics", getAnalytics);
}
export default routes;
