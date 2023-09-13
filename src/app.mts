import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function connectToMongoDB(connectionString: string) {
    await mongoose.connect(connectionString);
}

try {
    await connectToMongoDB(process.env.MONGODB_URI || '');
} catch (e) {
    console.log(`Error connecting to MongoDB: `, e);
}

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});