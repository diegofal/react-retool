# Retool Replacement Mobile App

A React Native mobile application that replicates the functionality of a Retool financial and inventory dashboard. The app displays key financial metrics, detailed views for accounts receivable, invoicing, and stock management, with charts and filterable tables.

## Documentation

- [Features Documentation](FEATURES.md) - Detailed breakdown of all features and implementation details
- [API Documentation](API.md) - API endpoints and data structures
- [Component Documentation](COMPONENTS.md) - Reusable components and their usage

## Features

- **Cuentas Corriente (Accounts Receivable)**
  - View current balances and overdue amounts
  - Sort and filter accounts
  - Highlight accounts with overdue payments

- **Facturas (Invoices)**
  - View invoice history with charts
  - Detailed invoice information
  - Filter by date range
  - View invoice items with stock information

- **Stock Management**
  - Current stock levels
  - Stock value by category
  - Stock value over time
  - Discontinued items
  - Filter by category, provider, and country

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native development environment set up
- iOS Simulator (for iOS development)
- Android Studio and Android SDK (for Android development)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd retool-replacement
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### iOS
```bash
npm run ios
# or
yarn ios
```

### Android
```bash
npm run android
# or
yarn android
```

## Project Structure

```
src/
  ├── components/       # Reusable components
  │   ├── Chart.tsx    # Chart components
  │   ├── DataTable.tsx # Data table component
  │   └── KpiCard.tsx  # KPI card component
  ├── navigation/       # Navigation configuration
  ├── screens/         # Screen components
  │   ├── CuentasCorrienteScreen.tsx
  │   ├── FacturasScreen.tsx
  │   └── StockScreen.tsx
  ├── services/        # API services
  │   └── api.ts       # Mock API implementation
  ├── store/           # State management
  │   └── index.ts     # Zustand store
  ├── types/           # TypeScript types
  │   ├── index.ts     # Type definitions
  │   └── declarations.d.ts # Module declarations
  └── utils/           # Utility functions
      └── formatters.ts # Formatting utilities
```

## Dependencies

### Core Dependencies
- React Native (0.73.4)
- React (18.2.0)
- TypeScript (5.0.4)

### Navigation
- @react-navigation/native
- @react-navigation/material-top-tabs

### State Management
- zustand
- @react-native-async-storage/async-storage

### UI Components
- react-native-vector-icons
- react-native-victory-native
- react-native-safe-area-context

### Development
- @types/react
- @types/react-native-vector-icons
- eslint
- prettier
- jest

## Development

The app uses TypeScript for type safety and better development experience. Key development features include:

- Type-safe navigation
- Reusable components
- Mock API data (ready to be replaced with real API calls)
- Responsive design
- Modern UI with charts and tables

### Code Style
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

### Testing
- Jest for unit testing
- React Native Testing Library for component testing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 