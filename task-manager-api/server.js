const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = 5000;

// 🧠 Middleware
app.use(cors());
app.use(express.json()); // ✅ This is what parses JSON bodies!!

// 🛣 Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// 🛢 Connect Mongo
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
