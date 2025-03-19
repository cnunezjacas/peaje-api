export const envConfig = () => ({
  DB_NAME: process.env.DB_NAME || 'db_peaje',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'GBRMHd50AulZWr0YsVAKgu20gVGjQXL6',
  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET || '55dVbLswpEBQeMrouwZXjtsZ1jCDqSEw',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION || '8h',
});
