import { Router, Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import {
  mockStock,
  mockStockValues,
  mockStockSnapshots,
  mockDiscontinuedStock,
  mockDiscontinuedStockValues
} from '../data/mockData';
import { StockItem, StockValue, StockSnapshot, DiscontinuedStockItem, DiscontinuedStockValue } from '../types';

const router = Router();

// Apply authentication middleware to all routes
router.use(authenticate);

/**
 * @swagger
 * /api/stock/current:
 *   get:
 *     summary: Get current stock items
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of current stock items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StockItem'
 */
router.get('/current', (req: Request, res: Response) => {
  res.json(mockStock);
});

/**
 * @swagger
 * /api/stock/values:
 *   get:
 *     summary: Get stock values by category
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of stock values by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StockValue'
 */
router.get('/values', (req: Request, res: Response) => {
  res.json(mockStockValues);
});

/**
 * @swagger
 * /api/stock/snapshots:
 *   get:
 *     summary: Get stock snapshots
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of stock snapshots
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StockSnapshot'
 */
router.get('/snapshots', (req: Request, res: Response) => {
  res.json(mockStockSnapshots);
});

/**
 * @swagger
 * /api/stock/discontinued:
 *   get:
 *     summary: Get discontinued stock items
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of discontinued stock items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DiscontinuedStockItem'
 */
router.get('/discontinued', (req: Request, res: Response) => {
  res.json(mockDiscontinuedStock);
});

/**
 * @swagger
 * /api/stock/discontinued/values:
 *   get:
 *     summary: Get discontinued stock values by category
 *     tags: [Stock]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of discontinued stock values by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DiscontinuedStockValue'
 */
router.get('/discontinued/values', (req: Request, res: Response) => {
  res.json(mockDiscontinuedStockValues);
});

export const stockRouter = router; 