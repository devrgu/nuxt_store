const express = require('express');
<<<<<<< HEAD
const { loadNuxt, build } = require('nuxt');

const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const mongoose = require('mongoose'); 

async function start() {
  try {

    await mongoose.connect("mongodb+srv://aubakirovasker60:Askerka00@cluster.jj91tcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")

    // Мы передаем конфигурацию в функцию loadNuxt
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start'); 

    // Middleware для Nuxt.js
    app.use(nuxt.render);

    // Сборка Nuxt.js в режиме разработки
    if (isDev) {
      try {  
        await build(nuxt);
      } catch (err) {
        console.error('Error building Nuxt:', err);
      } 
    }

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1); // Завершение процесса с кодом ошибки
  }
}

start();
=======
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
>>>>>>> ef949aa2e8e4b22c291f31a81ace30922246cc2b
