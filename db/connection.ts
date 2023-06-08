import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME_FRANKFURT,
  password: process.env.DATABASE_PASSWORD_FRANKFURT,
};

const connection = connect(config);

export const db = drizzle(connection);
