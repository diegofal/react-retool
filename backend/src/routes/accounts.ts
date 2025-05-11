import { Router, Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import { mockBalances, mockFuturePayments, mockDueBalances } from '../data/mockData';
import { BalanceItem, FuturePayment, DueBalance } from '../types';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

/**
 * @swagger
 * /api/accounts/balances:
 *   get:
 *     summary: Get customer balances
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of customer balances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BalanceItem'
 */
router.get('/balances', (req: Request, res: Response) => {
  res.json(mockBalances);
});

/**
 * @swagger
 * /api/accounts/future-payments:
 *   get:
 *     summary: Get future payments
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of future payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FuturePayment'
 */
router.get('/future-payments', (req: Request, res: Response) => {
  res.json(mockFuturePayments);
});

/**
 * @swagger
 * /api/accounts/due-balances:
 *   get:
 *     summary: Get due balances
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of due balances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DueBalance'
 */
router.get('/due-balances', (req: Request, res: Response) => {
  res.json(mockDueBalances);
});

export const accountsRouter = router; 