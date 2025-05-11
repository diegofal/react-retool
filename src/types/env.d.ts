declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    USE_MOCK_API: 'true' | 'false';
    API_BASE_URL: string;
  }
} 