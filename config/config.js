const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwt: process.env.JWT_SECRET || "hellaur", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://kabinghale1:l9UGvfWnFdst0IWN@cluster0.fponrte.mongodb.net/Portfolio"||
    process.env.MONGO_HOST 
    }
    export default config
   
   