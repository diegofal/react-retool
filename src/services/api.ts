import {
  BalanceItem,
  FuturePayment,
  DueBalance,
  BilledAmount,
  SpisaBilledAmount,
  BillHistoryItem,
  BillItem,
  BillLineItem,
  StockItem,
  StockValueItem,
  StockSnapshotItem,
  DiscontinuedStockItem,
  DiscontinuedStockValueItem,
} from '../types';

// Mock data
const mockBalances: BalanceItem[] = [
  { Name: 'GRAMABI', Amount: 1500000, Due: 500000, Type: 0 },
  { Name: 'NELSON', Amount: 2000000, Due: 1000000, Type: 0 },
  { Name: 'CLIENTE1', Amount: -500000, Due: 0, Type: 1 },
];

const mockFuturePayments: FuturePayment[] = [
  { PaymentAmount: 3000000 },
];

const mockDueBalance: DueBalance[] = [
  { Due: 1500000 },
];

const mockBilledAmount: BilledAmount[] = [
  { Billed: 5000000 },
];

const mockSpisaBilledAmount: SpisaBilledAmount[] = [
  { InvoiceAmount: 4500000 },
];

const mockBillHistory: BillHistoryItem[] = [
  { MonthYear: '2024-01-01T00:00:00Z', Amount: 4000000 },
  { MonthYear: '2024-02-01T00:00:00Z', Amount: 4500000 },
  { MonthYear: '2024-03-01T00:00:00Z', Amount: 5000000 },
];

const mockBills: BillItem[] = [
  {
    order_no: 'ORD001',
    invoiceDate: '2024-03-15T00:00:00Z',
    customerName: 'CLIENTE1',
    Type: 10,
    invoiceNumber: 'INV001',
    IdCliente: 'C001',
    totalAmount: 1500000,
  },
];

const mockBillItems: BillLineItem[] = [
  {
    stk_code: 'STK001',
    description: 'Producto 1',
    qty_sent: 10,
  },
];

const mockStock: StockItem[] = [
  {
    idArticulo: 1,
    Codigo: 'STK001',
    descripcion: 'Producto 1',
    cantidad_en_stock: 100,
    cantidad_vendida_en_periodo: 50,
    costo_de_oportunidad: 50000,
    ultima_compra: '2024-03-01T00:00:00Z',
    estado: 'OK',
    IdCategoria: 1,
    Categoria: 'Categoría 1',
    Proveedor: 'Proveedor 1',
    PaisProveedor: 'China',
  },
];

const mockStockValue: StockValueItem[] = [
  { category: 'Categoría 1', stock_value: 1000000 },
  { category: 'Categoría 2', stock_value: 2000000 },
];

const mockStockSnapshots: StockSnapshotItem[] = [
  { Date: '2024-01-01T00:00:00Z', StockValue: 3000000 },
  { Date: '2024-02-01T00:00:00Z', StockValue: 3500000 },
  { Date: '2024-03-01T00:00:00Z', StockValue: 4000000 },
];

const mockDiscontinuedStock: DiscontinuedStockItem[] = [
  {
    descripcion: 'Producto Descontinuado 1',
    cantidad: 5,
    categoria: 'Categoría 1',
  },
];

const mockDiscontinuedStockValue: DiscontinuedStockValueItem[] = [
  { category: 'Categoría 1', stock_value: 50000 },
  { category: 'Categoría 2', stock_value: 100000 },
];

// API functions
export const fetchSpisaBalances = async (): Promise<BalanceItem[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBalances;
};

export const fetchSpisaFuturePayments = async (): Promise<FuturePayment[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockFuturePayments;
};

export const fetchSpisaDueBalance = async (): Promise<DueBalance[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockDueBalance;
};

export const fetchXerpBilled = async (period: 'month' | 'day'): Promise<BilledAmount[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBilledAmount;
};

export const fetchSpisaBilled = async (period: 'month' | 'day'): Promise<SpisaBilledAmount[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockSpisaBilledAmount;
};

export const fetchXerpBillsHistory = async (): Promise<BillHistoryItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBillHistory;
};

export const fetchXerpBills = async (filterPeriod: 'month' | 'day'): Promise<BillItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBills;
};

export const fetchXerpBillItems = async (orderNo: string): Promise<BillLineItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockBillItems;
};

export const fetchSpisaStock = async (filters: {
  years: number;
  categoryIds: number[];
  providerIds: number[];
  countryNames: string[];
  needsRestock: boolean;
}): Promise<StockItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStock;
};

export const fetchSpisaStockValue = async (years: number): Promise<StockValueItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStockValue;
};

export const fetchSpisaStockSnapshots = async (): Promise<StockSnapshotItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStockSnapshots;
};

export const fetchSpisaStockDiscontinued = async (yearsNotSold: number): Promise<DiscontinuedStockItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockDiscontinuedStock;
};

export const fetchSpisaStockDiscontinuedGrouped = async (yearsNotSold: number): Promise<DiscontinuedStockValueItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockDiscontinuedStockValue;
}; 