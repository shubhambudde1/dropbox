<<<<<<< HEAD
/**
 * Drizzle Configuration
 *
 * This file configures Drizzle ORM to work with our Neon PostgreSQL database.
 * It's used by the Drizzle CLI for schema migrations and generating SQL.
 */

import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env.local");
}

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  // Configure migrations table
  migrations: {
    table: "__drizzle_migrations",
    schema: "public",
  },
  // Additional options
  verbose: true,
  strict: true,
  
=======
import * as dotenv from 'dotenv'; // <-- Add this line
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

dotenv.config({path: '.env.local'});

if(!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env.local');
}

export default defineConfig({
    schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations:{
    table:"__drizzle_migrations",
    schema: "public",
  },

    verbose: true,  
    strict: true,
>>>>>>> 39d38f8 (droply clone started)
});
