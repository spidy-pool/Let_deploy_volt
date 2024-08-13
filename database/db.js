import mongoose from 'mongoose';







export const Connection = async (username,password) => {
    // const URP = `mongodb+srv://${username}:${password}@cluster07.aomjovw.mongodb.net/?retryWrites=true&w=majority`;

     const URL = `mongodb+srv://arpitagaur93:arpita@flipkart.4iqqmma.mongodb.net/?retryWrites=true&w=majority&appName=Flipkart`;
    try {
        await mongoose.connect(URL,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
        console.log('Error nhi aya database m ');
    }
    catch (error) {
        console.log('Error agya h database m',error.message)
    }
}

export default Connection;