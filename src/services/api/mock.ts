import {
  BalanceItem,
  FuturePayment,
  DueBalance,
  BilledAmount,
  BillHistory,
  Bill,
  BillItem,
  StockItem,
  StockValue,
  StockSnapshot,
  DiscontinuedStockItem,
  DiscontinuedStockValue
} from '../../types';

// Mock data
const mockBalances: BalanceItem[] = [
  {
    id: '1',
    customerName: 'Customer A',
    balance: 5000,
    overdueAmount: 1000,
    lastPaymentDate: '2024-02-15'
  },
  {
    id: '2',
    customerName: 'Customer B',
    balance: 3000,
    overdueAmount: 0,
    lastPaymentDate: '2024-02-20'
  }
];

const mockFuturePayments: FuturePayment[] = [
  {
    id: '1',
    customerName: 'Customer A',
    amount: 2000,
    dueDate: '2024-03-15'
  },
  {
    id: '2',
    customerName: 'Customer B',
    amount: 1500,
    dueDate: '2024-03-20'
  }
];

const mockDueBalances: DueBalance[] = [
  {
    id: '1',
    customerName: 'Customer A',
    amount: 1000,
    daysOverdue: 30
  },
  {
    id: '2',
    customerName: 'Customer C',
    amount: 500,
    daysOverdue: 15
  }
];

const mockBilledAmounts: BilledAmount[] = [
  {
    id: '1',
    date: '2024-02-01',
    amount: 10000,
    currency: 'USD'
  },
  {
    id: '2',
    date: '2024-02-15',
    amount: 8000,
    currency: 'USD'
  }
];

const mockBillHistory: BillHistory[] = [
  {
    id: '1',
    date: '2024-02-01',
    totalAmount: 5000,
    status: 'paid'
  },
  {
    id: '2',
    date: '2024-02-15',
    totalAmount: 3000,
    status: 'pending'
  }
];

const mockBills: Bill[] = [
  {
    id: '1',
    orderNo: 'ORD001',
    date: '2024-02-01',
    customerName: 'Customer A',
    totalAmount: 5000,
    status: 'paid'
  },
  {
    id: '2',
    orderNo: 'ORD002',
    date: '2024-02-15',
    customerName: 'Customer B',
    totalAmount: 3000,
    status: 'pending'
  }
];

const mockBillItems: Record<string, BillItem[]> = {
  '1': [
    {
      id: '1',
      billId: '1',
      productCode: 'PROD001',
      description: 'Product 1',
      quantity: 2,
      unitPrice: 1500,
      totalPrice: 3000
    },
    {
      id: '2',
      billId: '1',
      productCode: 'PROD002',
      description: 'Product 2',
      quantity: 1,
      unitPrice: 2000,
      totalPrice: 2000
    }
  ],
  '2': [
    {
      id: '3',
      billId: '2',
      productCode: 'PROD003',
      description: 'Product 3',
      quantity: 3,
      unitPrice: 1000,
      totalPrice: 3000
    }
  ]
};

const mockStock: StockItem[] = [
  {
    id: '1',
    code: 'PROD001',
    description: 'Product 1',
    category: 'Category A',
    provider: 'Provider X',
    country: 'USA',
    quantity: 100,
    minQuantity: 50,
    needsRestock: false,
    lastUpdated: '2024-02-20'
  },
  {
    id: '2',
    code: 'PROD002',
    description: 'Product 2',
    category: 'Category B',
    provider: 'Provider Y',
    country: 'Canada',
    quantity: 30,
    minQuantity: 50,
    needsRestock: true,
    lastUpdated: '2024-02-20'
  }
];

const mockStockValues: StockValue[] = [
  {
    id: '1',
    category: 'Category A',
    totalValue: 50000,
    currency: 'USD'
  },
  {
    id: '2',
    category: 'Category B',
    totalValue: 30000,
    currency: 'USD'
  }
];

const mockStockSnapshots: StockSnapshot[] = [
  {
    id: '1',
    date: '2024-02-01',
    totalItems: 1000,
    totalValue: 100000,
    currency: 'USD'
  },
  {
    id: '2',
    date: '2024-02-15',
    totalItems: 950,
    totalValue: 95000,
    currency: 'USD'
  }
];

const mockDiscontinuedStock: DiscontinuedStockItem[] = [
  {
    id: '1',
    code: 'PROD003',
    description: 'Product 3',
    lastSoldDate: '2023-12-01',
    quantity: 50,
    value: 5000,
    currency: 'USD'
  },
  {
    id: '2',
    code: 'PROD004',
    description: 'Product 4',
    lastSoldDate: '2023-11-15',
    quantity: 30,
    value: 3000,
    currency: 'USD'
  }
];

const mockDiscontinuedStockValues: DiscontinuedStockValue[] = [
  {
    id: '1',
    category: 'Category A',
    totalValue: 5000,
    currency: 'USD'
  },
  {
    id: '2',
    category: 'Category B',
    totalValue: 3000,
    currency: 'USD'
  }
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Accounts Receivable API
  getBalances: async (): Promise<BalanceItem[]> => {
    await delay(500);
    return mockBalances;
  },

  getFuturePayments: async (): Promise<FuturePayment[]> => {
    await delay(500);
    return mockFuturePayments;
  },

  getDueBalances: async (): Promise<DueBalance[]> => {
    await delay(500);
    return mockDueBalances;
  },

  // Invoices API
  getBilledAmounts: async (): Promise<BilledAmount[]> => {
    await delay(500);
    return mockBilledAmounts;
  },

  getBillHistory: async (): Promise<BillHistory[]> => {
    await delay(500);
    return mockBillHistory;
  },

  getBills: async (): Promise<Bill[]> => {
    await delay(500);
    return mockBills;
  },

  getBillItems: async (billId: string): Promise<BillItem[]> => {
    await delay(500);
    return mockBillItems[billId] || [];
  },

  // Stock API
  getStock: async (): Promise<StockItem[]> => {
    await delay(500);
    return mockStock;
  },

  getStockValues: async (): Promise<StockValue[]> => {
    await delay(500);
    return mockStockValues;
  },

  getStockSnapshots: async (): Promise<StockSnapshot[]> => {
    await delay(500);
    return mockStockSnapshots;
  },

  getDiscontinuedStock: async (): Promise<DiscontinuedStockItem[]> => {
    await delay(500);
    return mockDiscontinuedStock;
  },

  getDiscontinuedStockValues: async (): Promise<DiscontinuedStockValue[]> => {
    await delay(500);
    return mockDiscontinuedStockValues;
  }
}; 