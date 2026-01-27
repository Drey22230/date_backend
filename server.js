import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import { config } from './config/env.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

