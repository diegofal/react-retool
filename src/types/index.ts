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

export interface SpisaBilledAmount {
  InvoiceAmount: number;
}

export interface BillHistoryItem {
  MonthYear: string;
  Amount: number;
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

export interface BillLineItem {
  stk_code: string;
  description: string;
  qty_sent: number;
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

// Navigation Types
export type RootStackParamList = {
  Main: undefined;
};

export type MainTabParamList = {
  CuentasCorriente: undefined;
  Facturas: undefined;
  Stock: undefined;
};

export type StockTabParamList = {
  Actual: undefined;
  Discontinuado: undefined;
};

// Store Types
export interface AppState {
  billFilterPeriod: 'month' | 'day' | 'all';
  selectedOrderNo: string | null;
  stockYears: number;
  stockDiscontinuedYears: number;
  needsRestock: boolean;
  selectedCategories: number[];
  selectedProviders: number[];
  selectedCountries: string[];
  setBillFilterPeriod: (period: 'month' | 'day' | 'all') => void;
  setSelectedOrderNo: (orderNo: string | null) => void;
  setStockYears: (years: number) => void;
  setStockDiscontinuedYears: (years: number) => void;
  setNeedsRestock: (needsRestock: boolean) => void;
  setSelectedCategories: (categories: number[]) => void;
  setSelectedProviders: (providers: number[]) => void;
  setSelectedCountries: (countries: string[]) => void;
} 