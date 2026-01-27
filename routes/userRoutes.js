import express from 'express';
import { createMessage, getMessages } from '../controllers/userControllers.js';
const router = express.Router();

router.post('/message',createMessage);
router.get('/read',getMessages);

export default router;