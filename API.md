# API Documentation

## Overview

The application uses a Backend-For-Frontend (BFF) pattern to handle API communication. The BFF layer provides a simplified and optimized API for the frontend, handling data transformation, error handling, and caching.

## Base URL

```
http://localhost:3000/api
```

## API Structure

### 1. Accounts Receivable API

#### Get Balances
```http
GET /accounts/balances
```
Returns current balances for all accounts.

#### Get Future Payments
```http
GET /accounts/future-payments
```
Returns scheduled future payments.

#### Get Due Balance
```http
GET /accounts/due-balance
```
Returns overdue balances.

### 2. Invoices API

#### Get Billed Amount
```http
GET /invoices/billed-amount?period={period}
```
Returns billed amounts for the specified period (month/day).

#### Get Spisa Billed Amount
```http
GET /invoices/spisa-billed-amount?period={period}
```
Returns Spisa billed amounts for the specified period.

#### Get Bills History
```http
GET /invoices/history
```
Returns invoice history with monthly trends.

#### Get Bills
```http
GET /invoices/bills?period={period}
```
Returns bills for the specified period.

#### Get Bill Items
```http
GET /invoices/bills/{orderNo}/items
```
Returns line items for a specific bill.

### 3. Stock API

#### Get Current Stock
```http
GET /stock/current
```
Query Parameters:
- years: number
- categoryIds: number[]
- providerIds: number[]
- countryNames: string[]
- needsRestock: boolean

#### Get Stock Value
```http
GET /stock/value?years={years}
```
Returns stock value by category.

#### Get Stock Snapshots
```http
GET /stock/snapshots
```
Returns historical stock value data.

#### Get Discontinued Stock
```http
GET /stock/discontinued?years={years}
```
Returns discontinued items not sold in specified years.

#### Get Discontinued Stock Grouped
```http
GET /stock/discontinued/grouped?years={years}
```
Returns discontinued items grouped by category.

## Error Handling

The BFF layer handles errors in the following way:

1. **API Errors** (4xx, 5xx)
   - Returns error message from the server
   - Logs error details for debugging

2. **Network Errors**
   - Returns "Network Error" message
   - Logs request details for debugging

3. **Request Errors**
   - Returns "Request Error" message
   - Logs error details for debugging

## Data Transformation

The BFF layer performs the following transformations:

1. **Response Formatting**
   - Converts dates to ISO format
   - Formats currency values
   - Normalizes data structures

2. **Error Response Format**
```json
{
  "message": "Error message",
  "code": "ERROR_CODE",
  "details": {}
}
```

## Authentication

The BFF layer handles authentication using JWT tokens:

1. **Token Storage**
   - Tokens are stored in AsyncStorage
   - Automatically refreshed when expired

2. **Request Headers**
```http
Authorization: Bearer {token}
```

## Caching

The BFF implements caching for:

1. **Static Data**
   - Category lists
   - Provider lists
   - Country lists

2. **Frequently Accessed Data**
   - Current stock levels
   - Recent invoices
   - Account balances

## Rate Limiting

The BFF implements rate limiting to prevent API abuse:

1. **Limits**
   - 100 requests per minute per endpoint
   - 1000 requests per hour per user

2. **Response Headers**
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1609459200
``` 