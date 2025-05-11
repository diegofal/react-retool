import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface KpiCardProps {
  primaryValue: string;
  secondaryValue?: string;
  label: string;
  iconName: string;
  iconColor: string;
  primaryColor: string;
  onPress?: () => void;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  primaryValue,
  secondaryValue,
  label,
  iconName,
  iconColor,
  primaryColor,
  onPress,
}) => {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent
      style={[styles.container, { borderColor: primaryColor }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={24} color={iconColor} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.primaryValue, { color: primaryColor }]}>
          {primaryValue}
        </Text>
        {secondaryValue && (
          <Text style={[styles.secondaryValue, { color: primaryColor }]}>
            {secondaryValue}
          </Text>
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  primaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  secondaryValue: {
    fontSize: 16,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
}); 