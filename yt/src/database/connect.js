const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zjrawra.mongodb.net/?retryWrites=true&w=majority`);
        console.log('Conexão ao banco de dados concluida com sucesso!');
    } catch (error) {
         console.log('Ocorreu um erro ao tentar se conectar a seu banco de dados.', error)
    }
     
     
    }


module.exports = connectToDatabase