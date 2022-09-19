import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    tinyUrl: { type: String, required: true, unique: true },
    numberOfVisits: { type: Number, required: true, default: 0 },
});
const shortUrl = mongoose.model('shortUrl', schema);
export default shortUrl;
