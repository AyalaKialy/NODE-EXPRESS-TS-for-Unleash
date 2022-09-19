import mongoose, { Document } from 'mongoose';
import shorId from 'shortid';

export interface ShortURL extends Document {
    longUrl: string;
    tinyUrl: string;
    numberOfVisits: number;
}

const schema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    tinyUrl: { type: String, required: true, unique: true, default: shorId.generate() },
    numberOfVisits: { type: Number, required: true, default: 0 },
});

const shortUrl = mongoose.model<ShortURL>('shortUrl', schema);

export default shortUrl;
