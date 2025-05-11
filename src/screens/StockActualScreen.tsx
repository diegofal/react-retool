import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from '../components/DataTable';
import { LineChart, PieChart } from '../components/Chart';
import { useStore } from '../store';
import { StockItem, StockValueItem, StockSnapshotItem } from '../types';
import {
  fetchSpisaStock,
  fetchSpisaStockValue,
  fetchSpisaStockSnapshots,
} from '../services/api';
import { formatCurrency, formatDate } from '../utils/formatters';

export function StockActualScreen() {
  const {
    stockYears,
    needsRestock,
    selectedCategories,
    selectedProviders,
    selectedCountries,
    setStockYears,
    setNeedsRestock,
    setSelectedCategories,
    setSelectedProviders,
    setSelectedCountries,
  } = useStore();

  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState<StockItem[]>([]);
  const [stockValue, setStockValue] = useState<StockValueItem[]>([]);
  const [stockSnapshots, setStockSnapshots] = useState<StockSnapshotItem[]>([]);

  useEffect(() => {
    loadData();
  }, [stockYears, needsRestock, selectedCategories, selectedProviders, selectedCountries]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [stockData, valueData, snapshotsData] = await Promise.all([
        fetchSpisaStock({
          years: stockYears,
          categoryIds: selectedCategories,
          providerIds: selectedProviders,
          countryNames: selectedCountries,
          needsRestock,
        }),
        fetchSpisaStockValue(stockYears),
        fetchSpisaStockSnapshots(),
      ]);
      setStock(stockData);
      setStockValue(valueData);
      setStockSnapshots(snapshotsData);
    } catch (error) {
      console.error('Error loading stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'Codigo' as keyof StockItem,
      title: 'Codigo',
      width: 100,
    },
    {
      key: 'descripcion' as keyof StockItem,
      title: 'Descripcion',
      width: 200,
    },
    {
      key: 'cantidad_en_stock' as keyof StockItem,
      title: 'Cantidad en st...',
      width: 120,
      align: 'right' as const,
    },
    {
      key: 'cantidad_vendida_en_periodo' as keyof StockItem,
      title: 'Cantidad vendida en peri...',
      width: 120,
      align: 'right' as const,
    },
    {
      key: 'costo_de_oportunidad' as keyof StockItem,
      title: 'Costo de oportunit...',
      width: 120,
      align: 'right' as const,
      render: (item: StockItem) => formatCurrency(item.costo_de_oportunidad),
    },
    {
      key: 'ultima_compra' as keyof StockItem,
      title: 'Ultima com...',
      width: 120,
      render: (item: StockItem) => formatDate(item.ultima_compra),
    },
    {
      key: 'estado' as keyof StockItem,
      title: 'Estado',
      width: 150,
      render: (item: StockItem) => (
        <View style={[styles.statusTag, { backgroundColor: getStatusColor(item.estado) }]}>
          <Text style={styles.statusText}>{item.estado}</Text>
        </View>
      ),
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Necesita Reposicion':
        return '#FFC107';
      case 'OK':
        return '#4CAF50';
      case 'Bajo Stock':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const pieChartData = stockValue.map(item => ({
    x: item.category,
    y: item.stock_value,
  }));

  const lineChartData = stockSnapshots.map(item => ({
    x: formatDate(item.Date),
    y: item.StockValue,
  }));

  const footer = (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{stock.length} results</Text>
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
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Vendido en años:</Text>
        <TextInput
          style={styles.input}
          value={stockYears.toString()}
          onChangeText={(text) => setStockYears(Number(text) || 0)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.chartsContainer}>
        <View style={styles.chartColumn}>
          <PieChart data={pieChartData} height={300} />
        </View>
        <View style={styles.chartColumn}>
          <LineChart
            data={lineChartData}
            xLabel="Date"
            yLabel="Stock Value"
            color="#2196F3"
            height={300}
          />
        </View>
      </View>

      <DataTable
        columns={columns}
        data={stock}
        loading={loading}
        footer={footer}
      />
    </ScrollView>
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
  chartsContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  chartColumn: {
    flex: 1,
  },
  statusTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
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