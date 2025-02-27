import mongoose from 'mongoose';
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/SocialNetworkAPI');
        console.log('Database connected.');
        return mongoose;
    }
    catch (error) {
        console.log('Database connection failed:', error);
        throw new Error('Database connection failed');
    }
};
export default db;
