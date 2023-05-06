import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ProjectsRouter from './routes/projects.js';

const app = express();

// connect to mongodb db
mongoose.connect('mongodb://0.0.0.0:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

// use projects router
app.use('/projects', ProjectsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));