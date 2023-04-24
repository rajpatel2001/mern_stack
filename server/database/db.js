import mongoose from "mongoose"

const connection = async (URL_DB) => {

    //const URL = `mongodb+srv://${username}:${password}@crud-app.demzffi.mongodb.net/?retryWrites=true&w=majority`;

    // const URL = `mongodb+srv://${username}:${password}@cluster0.r14eb01.mongodb.net/mern`;

    try{
        await mongoose.connect(URL_DB, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    }catch(error) {
        console.log('Error while connecting with the database', error);
    }
}

export default connection;

