import { Router } from 'express';
import AccountRouter from './Accounts';
//import UserRouter from './Users';

// Init router and path
const router = Router();

// BASE Route is in ../Server.ts (currentli 'epi')

// Add sub-routes
//router.use('/users', UserRouter);
router.use('/accounts', AccountRouter);

// Export the base-router
export default router;
