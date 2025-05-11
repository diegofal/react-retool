import { Router, Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import {
  mockBilledAmounts,
  mockBillHistory,
  mockBills,
  mockBillItems
} from '../data/mockData';
import { BilledAmount, BillHistory, Bill, BillItem } from '../types';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

/**
 * @swagger
 * /api/invoices/billed-amounts:
 *   get:
 *     summary: Get billed amounts
 *     tags: [Invoices]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of billed amounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BilledAmount'
 */
router.get('/billed-amounts', (req: Request, res: Response) => {
  res.json(mockBilledAmounts);
});

/**
 * @swagger
 * /api/invoices/bill-history:
 *   get:
 *     summary: Get bill history
 *     tags: [Invoices]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of bill history entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BillHistory'
 */
router.get('/bill-history', (req: Request, res: Response) => {
  res.json(mockBillHistory);
});

/**
 * @swagger
 * /api/invoices/bills:
 *   get:
 *     summary: Get all bills
 *     tags: [Invoices]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of bills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bill'
 */
router.get('/bills', (req: Request, res: Response) => {
  res.json(mockBills);
});

/**
 * @swagger
 * /api/invoices/bills/{billId}/items:
 *   get:
 *     summary: Get items for a specific bill
 *     tags: [Invoices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: billId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the bill
 *     responses:
 *       200:
 *         description: List of bill items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BillItem'
 *       404:
 *         description: Bill not found
 */
router.get('/bills/:billId/items', (req: Request, res: Response) => {
  const { billId } = req.params;
  const items = mockBillItems[billId] || [];
  res.json(items);
});

export const invoicesRouter = router; 