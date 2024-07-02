//app.js of backend
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Set up headers manually to handle CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // MongoDB Atlas connection
// const dbURI = 'mongodb+srv://sany:t1313@cluster0.f5o90nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch(err => console.error('Error connecting to MongoDB Atlas', err));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

// // Define a schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   mobile: String,
// });

// const User = mongoose.model('User', userSchema);

// // Define routes
// app.post('/submit', async (req, res) => {
//   const { name, email, password, mobile } = req.body;

//   if (mobile.length !== 10) {
//     return res.status(400).json({ error: 'Mobile number must be 10 digits.' });
//   }

//   const user = new User({ name, email, password, mobile });
//   try {
//     await user.save();
//     res.status(201).json({ message: 'User saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save user' });
//   }
// });

// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });










// mongodb+srv://sany:t1313@cluster0.f5o90nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors=require('cors')
// const { errorHandler } = require('./middlewares/errorHandler');
// const app = express();
// app.use(cors());
// app.use(express.json());
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// const dbURI = process.env.DB_URI || 'mongodb+srv://sany:t1313@cluster0.f5o90nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(dbURI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Connection error', err));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);



// // Error handling middleware
// app.use(errorHandler);





// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });







const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose');
const connectDB=require('./db/connect')
const userRoutes = require('./routes/userRoutes')
const searchLog=require('./routes/searchLog')
const schedule = require('node-schedule');
const { identifyFrequentSearchesAndSendEmails } = require('./controllers/searchLogController');


// const { mongoURI } = require('./utils/constants');

require('dotenv').config()

const app = express();

app.use(cors('*'));
app.use(express.json());

// Middleware


// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/searches',searchLog);



schedule.scheduleJob('0 9 * * *', identifyFrequentSearchesAndSendEmails);

const port=process.env.PORT || 5000;


const start=async()=>{
    try{
       
        await connectDB(process.env.mongoURI)
        
        
        app.listen(port,console.log(`Server listening on port ${port} ...`))
    }catch(error){
        console.log(error)
    }

}

start();
