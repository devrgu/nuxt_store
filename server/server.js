const express = require('express');
const authRouter = require('./authRouter')
const app = express();

app.use(express.json());
app.use("/auth", authRouter)
// Пример маршрута API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://aubakirovasker60:Askerka00@cluster.jj91tcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  } 
}; 

module.exports = app;