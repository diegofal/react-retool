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
} from '../types';

// Accounts Receivable Mock Data
export const mockBalances: BalanceItem[] = [
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

export const mockFuturePayments: FuturePayment[] = [
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

export const mockDueBalances: DueBalance[] = [
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

// Invoices Mock Data
export const mockBilledAmounts: BilledAmount[] = [
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

export const mockBillHistory: BillHistory[] = [
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

export const mockBills: Bill[] = [
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

export const mockBillItems: Record<string, BillItem[]> = {
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

// Stock Mock Data
export const mockStock: StockItem[] = [
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

export const mockStockValues: StockValue[] = [
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

export const mockStockSnapshots: StockSnapshot[] = [
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

export const mockDiscontinuedStock: DiscontinuedStockItem[] = [
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

export const mockDiscontinuedStockValues: DiscontinuedStockValue[] = [
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