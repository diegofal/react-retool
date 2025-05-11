import { mockApi } from './mock';
import { bffApi } from './bff';

// Use mock API in development, real BFF API in production
const USE_MOCK_API = process.env.NODE_ENV === 'development' && process.env.USE_MOCK_API === 'true';

// Export the appropriate API implementation
export const api = USE_MOCK_API ? mockApi : bffApi;

// Export types for convenience
export type ApiService = typeof api; 