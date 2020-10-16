import express from 'express';
import AccountRouter from './account.routes';

const router = express.Router();

// API api
router.use('/api', AccountRouter);
export default router;
