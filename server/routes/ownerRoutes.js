
import express from 'express';
import { protect } from '../middleware/auth.js';

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect)