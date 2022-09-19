import mongoose from 'mongoose';

async function db() {

    const dbUri = process.env.DB_URI as string;

    try {
        await mongoose.connect(dbUri);
        console.log(`DB connected to ${dbUri}`);
    } catch (e) {
        console.error(e);
    }
}

export default db;