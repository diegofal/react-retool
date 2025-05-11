import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from '../components/DataTable';
import { BalanceItem } from '../types';
import { fetchSpisaBalances } from '../services/api';
import { formatCurrency } from '../utils/formatters';

export function CuentasCorrienteScreen() {
  const [loading, setLoading] = useState(true);
  const [balances, setBalances] = useState<BalanceItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<BalanceItem | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchSpisaBalances();
      setBalances(data);
    } catch (error) {
      console.error('Error loading balances:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'Name' as keyof BalanceItem,
      title: 'Name',
      width: 200,
    },
    {
      key: 'Amount' as keyof BalanceItem,
      title: 'Saldo',
      width: 150,
      align: 'right' as const,
      render: (item: BalanceItem) => (
        <View style={[
          styles.amountCell,
          item.Type === 0 && styles.debtAmount,
        ]}>
          {formatCurrency(item.Amount)}
        </View>
      ),
    },
    {
      key: 'Due' as keyof BalanceItem,
      title: 'Saldo Vencido',
      width: 150,
      align: 'right' as const,
      render: (item: BalanceItem) => (
        <View style={[
          styles.amountCell,
          item.Type === 0 && styles.debtAmount,
        ]}>
          {formatCurrency(item.Due)}
        </View>
      ),
    },
  ];

  const handleRowPress = (item: BalanceItem) => {
    setSelectedItem(item);
    // Sort by Saldo Vencido in descending order
    const sortedBalances = [...balances].sort((a, b) => b.Due - a.Due);
    setBalances(sortedBalances);
  };

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{balances.length} results</Text>
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="filter" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="download" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={loadData}>
          <Icon name="refresh" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <DataTable
        columns={columns}
        data={balances}
        loading={loading}
        onRowPress={handleRowPress}
        selectedItem={selectedItem}
        footer={footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  amountCell: {
    padding: 8,
  },
  debtAmount: {
    backgroundColor: '#333',
    borderRadius: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  footerButtons: {
    flexDirection: 'row',
  },
  footerButton: {
    marginLeft: 16,
    padding: 8,
  },
}); 