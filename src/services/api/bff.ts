import axios, { AxiosInstance, AxiosError } from 'axios';
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

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network Error:', error.request);
      return Promise.reject(new Error('Network error occurred'));
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request Error:', error.message);
      return Promise.reject(error);
    }
  }
);

export const bffApi = {
  // Accounts Receivable API
  getBalances: async (): Promise<BalanceItem[]> => {
    const response = await api.get('/balances');
    return response.data;
  },

  getFuturePayments: async (): Promise<FuturePayment[]> => {
    const response = await api.get('/future-payments');
    return response.data;
  },

  getDueBalances: async (): Promise<DueBalance[]> => {
    const response = await api.get('/due-balances');
    return response.data;
  },

  // Invoices API
  getBilledAmounts: async (): Promise<BilledAmount[]> => {
    const response = await api.get('/billed-amounts');
    return response.data;
  },

  getBillHistory: async (): Promise<BillHistory[]> => {
    const response = await api.get('/bill-history');
    return response.data;
  },

  getBills: async (): Promise<Bill[]> => {
    const response = await api.get('/bills');
    return response.data;
  },

  getBillItems: async (billId: string): Promise<BillItem[]> => {
    const response = await api.get(`/bills/${billId}/items`);
    return response.data;
  },

  // Stock API
  getStock: async (): Promise<StockItem[]> => {
    const response = await api.get('/stock');
    return response.data;
  },

  getStockValues: async (): Promise<StockValue[]> => {
    const response = await api.get('/stock/values');
    return response.data;
  },

  getStockSnapshots: async (): Promise<StockSnapshot[]> => {
    const response = await api.get('/stock/snapshots');
    return response.data;
  },

  getDiscontinuedStock: async (): Promise<DiscontinuedStockItem[]> => {
    const response = await api.get('/stock/discontinued');
    return response.data;
  },

  getDiscontinuedStockValues: async (): Promise<DiscontinuedStockValue[]> => {
    const response = await api.get('/stock/discontinued/values');
    return response.data;
  }
}; 