const express = require ('express');
const dotenv = require ('dotenv').config();
const cors = require ('cors');
const {errorHandler}= require('./middleware/error/errorHandler')
const userRoutes = require('./routes/userRoutes');

const dbConnect = require('../backend/config/dbConnect');


//Application Middleware
const app = express();


//DB connect 
dbConnect();

app.use(express.json());


//cors
app.use(cors());

//Api User


app.use('/api/users',userRoutes)

app.use(errorHandler)



//SERVER PORT CONFIG
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running ${port} `));








