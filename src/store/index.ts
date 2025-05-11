import { create } from 'zustand';
import { AppState } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create<AppState>((set) => ({
  // Initial state
  billFilterPeriod: 'month',
  selectedOrderNo: null,
  stockYears: 2,
  stockDiscontinuedYears: 10,
  needsRestock: false,
  selectedCategories: [],
  selectedProviders: [],
  selectedCountries: [],

  // Actions
  setBillFilterPeriod: async (period) => {
    set({ billFilterPeriod: period });
    await AsyncStorage.setItem('billFilterPeriod', period);
  },

  setSelectedOrderNo: (orderNo) => {
    set({ selectedOrderNo: orderNo });
  },

  setStockYears: (years) => {
    set({ stockYears: years });
  },

  setStockDiscontinuedYears: (years) => {
    set({ stockDiscontinuedYears: years });
  },

  setNeedsRestock: (needsRestock) => {
    set({ needsRestock });
  },

  setSelectedCategories: (categories) => {
    set({ selectedCategories: categories });
  },

  setSelectedProviders: (providers) => {
    set({ selectedProviders: providers });
  },

  setSelectedCountries: (countries) => {
    set({ selectedCountries: countries });
  },
}));

// Initialize store from AsyncStorage
const initializeStore = async () => {
  try {
    const billFilterPeriod = await AsyncStorage.getItem('billFilterPeriod');
    if (billFilterPeriod) {
      useStore.getState().setBillFilterPeriod(billFilterPeriod as 'month' | 'day' | 'all');
    }
  } catch (error) {
    console.error('Error initializing store:', error);
  }
};

initializeStore(); 