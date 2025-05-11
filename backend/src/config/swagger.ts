import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Retool Replacement API',
      version: '1.0.0',
      description: 'API documentation for the Retool Replacement application',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        BalanceItem: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            customerName: { type: 'string' },
            balance: { type: 'number' },
            overdueAmount: { type: 'number' },
            lastPaymentDate: { type: 'string', format: 'date' }
          }
        },
        FuturePayment: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            customerName: { type: 'string' },
            amount: { type: 'number' },
            dueDate: { type: 'string', format: 'date' }
          }
        },
        DueBalance: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            customerName: { type: 'string' },
            amount: { type: 'number' },
            daysOverdue: { type: 'number' }
          }
        },
        BilledAmount: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            date: { type: 'string', format: 'date' },
            amount: { type: 'number' },
            currency: { type: 'string' }
          }
        },
        BillHistory: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            date: { type: 'string', format: 'date' },
            totalAmount: { type: 'number' },
            status: { type: 'string', enum: ['paid', 'pending', 'overdue'] }
          }
        },
        Bill: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            orderNo: { type: 'string' },
            date: { type: 'string', format: 'date' },
            customerName: { type: 'string' },
            totalAmount: { type: 'number' },
            status: { type: 'string', enum: ['paid', 'pending', 'overdue'] }
          }
        },
        BillItem: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            billId: { type: 'string' },
            productCode: { type: 'string' },
            description: { type: 'string' },
            quantity: { type: 'number' },
            unitPrice: { type: 'number' },
            totalPrice: { type: 'number' }
          }
        },
        StockItem: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            code: { type: 'string' },
            description: { type: 'string' },
            category: { type: 'string' },
            provider: { type: 'string' },
            country: { type: 'string' },
            quantity: { type: 'number' },
            minQuantity: { type: 'number' },
            needsRestock: { type: 'boolean' },
            lastUpdated: { type: 'string', format: 'date' }
          }
        },
        StockValue: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            category: { type: 'string' },
            totalValue: { type: 'number' },
            currency: { type: 'string' }
          }
        },
        StockSnapshot: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            date: { type: 'string', format: 'date' },
            totalItems: { type: 'number' },
            totalValue: { type: 'number' },
            currency: { type: 'string' }
          }
        },
        DiscontinuedStockItem: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            code: { type: 'string' },
            description: { type: 'string' },
            lastSoldDate: { type: 'string', format: 'date' },
            quantity: { type: 'number' },
            value: { type: 'number' },
            currency: { type: 'string' }
          }
        },
        DiscontinuedStockValue: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            category: { type: 'string' },
            totalValue: { type: 'number' },
            currency: { type: 'string' }
          }
        }
      }
    },
    security: [{
      bearerAuth: [],
    }],
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

export const swaggerSpec = swaggerJsdoc(options); 