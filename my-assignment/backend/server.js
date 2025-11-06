const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const cors = require('cors');

//LOAD ENV VARIABLES
dotenv.config();
//
const app = express();
//MIDDLEWARE TO ENABLE CORS
// ✅ Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // your React frontend URL
  credentials: true
}));
//MIDDLEWARE TO PARSE JSON REQUESTS
app.use(express.json());
//connect to database ie MongoDB
connectDB();   
//import routes
const TaskRoutes = require('./Routes/Task');

//USE ROUTES
app.use('/api/Task', TaskRoutes);

 //default route
app.get('/', (req, res) => {
  res.send('Welcome to My Task Manager API');
});
//START THE SERVER
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
}
);

