import express from 'express';
import { createMessage, getMessages } from '../controllers/userControllers.js';
const router = express.Router();

router.post('/api/users/message',createMessage);
router.get('/api/users/read',getMessages);

export default router;