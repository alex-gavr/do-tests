import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME_FRANKFURT,
  password: process.env.DATABASE_PASSWORD_FRANKFURT,
});

export const db = drizzle(connection);