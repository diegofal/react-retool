import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from '../components/DataTable';
import { LineChart } from '../components/Chart';
import { useStore } from '../store';
import {
  BillItem,
  BillLineItem,
  BillHistoryItem,
} from '../types';
import {
  fetchXerpBillsHistory,
  fetchXerpBills,
  fetchXerpBillItems,
} from '../services/api';
import { formatCurrency, formatDate, formatMonthYear } from '../utils/formatters';

export function FacturasScreen() {
  const { billFilterPeriod, selectedOrderNo, setSelectedOrderNo } = useStore();
  const [loading, setLoading] = useState(true);
  const [bills, setBills] = useState<BillItem[]>([]);
  const [billItems, setBillItems] = useState<BillLineItem[]>([]);
  const [billHistory, setBillHistory] = useState<BillHistoryItem[]>([]);

  useEffect(() => {
    loadData();
  }, [billFilterPeriod]);

  useEffect(() => {
    if (selectedOrderNo) {
      loadBillItems(selectedOrderNo);
    } else {
      setBillItems([]);
    }
  }, [selectedOrderNo]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [billsData, historyData] = await Promise.all([
        fetchXerpBills(billFilterPeriod),
        fetchXerpBillsHistory(),
      ]);
      setBills(billsData);
      setBillHistory(historyData);
    } catch (error) {
      console.error('Error loading bills:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadBillItems = async (orderNo: string) => {
    try {
      const items = await fetchXerpBillItems(orderNo);
      setBillItems(items);
    } catch (error) {
      console.error('Error loading bill items:', error);
    }
  };

  const handleBillPress = (bill: BillItem) => {
    setSelectedOrderNo(bill.order_no);
  };

  const billsColumns = [
    {
      key: 'invoiceDate' as keyof BillItem,
      title: 'Invoice date',
      width: 120,
      render: (item: BillItem) => formatDate(item.invoiceDate),
    },
    {
      key: 'customerName' as keyof BillItem,
      title: 'Customer name',
      width: 200,
    },
    {
      key: 'invoiceNumber' as keyof BillItem,
      title: 'Invoice number',
      width: 120,
    },
    {
      key: 'totalAmount' as keyof BillItem,
      title: 'Total amount',
      width: 120,
      align: 'right' as const,
      render: (item: BillItem) => formatCurrency(item.totalAmount),
    },
  ];

  const billItemsColumns = [
    {
      key: 'description' as keyof BillLineItem,
      title: 'Description',
      width: 300,
    },
    {
      key: 'qty_sent' as keyof BillLineItem,
      title: 'Qty sent',
      width: 100,
      align: 'right' as const,
    },
  ];

  const chartData = billHistory.map(item => ({
    x: formatMonthYear(item.MonthYear),
    y: item.Amount,
  }));

  const billsFooter = (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{bills.length} results</Text>
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

  const billItemsFooter = (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{billItems.length} results</Text>
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="filter" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="download" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        xLabel="Month"
        yLabel="Amount"
        color="#2196F3"
        height={200}
      />
      <DataTable
        columns={billsColumns}
        data={bills}
        loading={loading}
        onRowPress={handleBillPress}
        selectedItem={bills.find(b => b.order_no === selectedOrderNo)}
        footer={billsFooter}
      />
      {selectedOrderNo && (
        <DataTable
          columns={billItemsColumns}
          data={billItems}
          loading={loading}
          footer={billItemsFooter}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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