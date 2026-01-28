import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000, 

  db: {
    connectionString: process.env.DATABASE__URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
