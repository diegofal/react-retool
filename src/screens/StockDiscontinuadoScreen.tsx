import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from '../components/DataTable';
import { PieChart } from '../components/Chart';
import { useStore } from '../store';
import {
  DiscontinuedStockItem,
  DiscontinuedStockValueItem,
} from '../types';
import {
  fetchSpisaStockDiscontinued,
  fetchSpisaStockDiscontinuedGrouped,
} from '../services/api';

export function StockDiscontinuadoScreen() {
  const { stockDiscontinuedYears, setStockDiscontinuedYears } = useStore();
  const [loading, setLoading] = useState(true);
  const [discontinuedStock, setDiscontinuedStock] = useState<DiscontinuedStockItem[]>([]);
  const [discontinuedStockValue, setDiscontinuedStockValue] = useState<DiscontinuedStockValueItem[]>([]);

  useEffect(() => {
    loadData();
  }, [stockDiscontinuedYears]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [stockData, valueData] = await Promise.all([
        fetchSpisaStockDiscontinued(stockDiscontinuedYears),
        fetchSpisaStockDiscontinuedGrouped(stockDiscontinuedYears),
      ]);
      setDiscontinuedStock(stockData);
      setDiscontinuedStockValue(valueData);
    } catch (error) {
      console.error('Error loading discontinued stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'descripcion' as keyof DiscontinuedStockItem,
      title: 'Descripcion',
      width: 300,
    },
    {
      key: 'cantidad' as keyof DiscontinuedStockItem,
      title: 'Cantidad',
      width: 100,
      align: 'right' as const,
    },
    {
      key: 'categoria' as keyof DiscontinuedStockItem,
      title: 'Categoria',
      width: 150,
    },
  ];

  const pieChartData = discontinuedStockValue.map(item => ({
    x: item.category,
    y: item.stock_value,
  }));

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{discontinuedStock.length} results</Text>
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
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>No vendido en años:</Text>
        <TextInput
          style={styles.input}
          value={stockDiscontinuedYears.toString()}
          onChangeText={(text) => setStockDiscontinuedYears(Number(text) || 0)}
          keyboardType="numeric"
        />
      </View>

      <PieChart data={pieChartData} height={300} />

      <DataTable
        columns={columns}
        data={discontinuedStock}
        loading={loading}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 8,
  },
  inputLabel: {
    marginRight: 8,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    width: 60,
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