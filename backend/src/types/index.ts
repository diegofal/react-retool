// API Response Types
export interface BalanceItem {
  id: string;
  customerName: string;
  balance: number;
  overdueAmount: number;
  lastPaymentDate: string;
}

export interface FuturePayment {
  id: string;
  customerName: string;
  amount: number;
  dueDate: string;
}

export interface DueBalance {
  id: string;
  customerName: string;
  amount: number;
  daysOverdue: number;
}

export interface BilledAmount {
  id: string;
  date: string;
  amount: number;
  currency: string;
}

export interface BillHistory {
  id: string;
  date: string;
  totalAmount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Bill {
  id: string;
  orderNo: string;
  date: string;
  customerName: string;
  totalAmount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface BillItem {
  id: string;
  billId: string;
  productCode: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface StockItem {
  id: string;
  code: string;
  description: string;
  category: string;
  provider: string;
  country: string;
  quantity: number;
  minQuantity: number;
  needsRestock: boolean;
  lastUpdated: string;
}

export interface StockValue {
  id: string;
  category: string;
  totalValue: number;
  currency: string;
}

export interface StockSnapshot {
  id: string;
  date: string;
  totalItems: number;
  totalValue: number;
  currency: string;
}

export interface DiscontinuedStockItem {
  id: string;
  code: string;
  description: string;
  lastSoldDate: string;
  quantity: number;
  value: number;
  currency: string;
}

export interface DiscontinuedStockValue {
  id: string;
  category: string;
  totalValue: number;
  currency: string;
}

// Request Types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}

// Error Types
export interface ApiError {
  status: 'error';
  message: string;
  code?: string;
  details?: Record<string, unknown>;
} 