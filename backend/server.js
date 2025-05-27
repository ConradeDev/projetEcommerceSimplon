require('dotenv').config();
const express=require('express');
const app=express();
const connectDB=require('./config/dbConfig');
const routeUser=require('./routes/user.route');
const routeShop=require('./routes/shop.route');
const cors=require('cors')

connectDB();

const PORT = process.env.PORT;
app.use(cors());

app.use(express.json())
app.use('/api/user',routeUser);
app.use('/api-shop',routeShop);



app.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`);
})