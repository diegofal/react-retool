import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Column<T> {
  key: keyof T;
  title: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onRowPress?: (item: T) => void;
  selectedItem?: T;
  footer?: React.ReactNode;
}

export function DataTable<T>({
  columns,
  data,
  loading = false,
  onRowPress,
  selectedItem,
  footer,
}: DataTableProps<T>) {
  const renderHeader = () => (
    <View style={styles.header}>
      {columns.map((column, index) => (
        <View
          key={index}
          style={[
            styles.headerCell,
            { width: column.width },
            { alignItems: column.align || 'left' },
          ]}
        >
          <Text style={styles.headerText}>{column.title}</Text>
        </View>
      ))}
    </View>
  );

  const renderRow = ({ item }: { item: T }) => {
    const RowComponent = onRowPress ? TouchableOpacity : View;
    const isSelected = selectedItem === item;

    return (
      <RowComponent
        style={[
          styles.row,
          isSelected && styles.selectedRow,
          onRowPress && styles.pressableRow,
        ]}
        onPress={() => onRowPress?.(item)}
      >
        {columns.map((column, index) => (
          <View
            key={index}
            style={[
              styles.cell,
              { width: column.width },
              { alignItems: column.align || 'left' },
            ]}
          >
            {column.render ? (
              column.render(item)
            ) : (
              <Text style={styles.cellText}>
                {String(item[column.key])}
              </Text>
            )}
          </View>
        ))}
      </RowComponent>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>0 results</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
      />
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerCell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  list: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  pressableRow: {
    backgroundColor: 'white',
  },
  selectedRow: {
    backgroundColor: '#e3f2fd',
  },
  cell: {
    flex: 1,
    paddingHorizontal: 8,
  },
  cellText: {
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
  },
}); 