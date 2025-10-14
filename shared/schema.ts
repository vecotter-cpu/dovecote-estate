import { pgTable, serial, text, integer, timestamp, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/** Lots */
export const lots = pgTable("lots", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  size: text("size").notNull(),          // e.g. "650m²"
  price: integer("price").notNull(),     // in AUD
  features: jsonb("features").$type<string[]>().default([]).notNull(),
  status: text("status").notNull(),      // "available" | "under-offer" | "sold"
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", { withTimezone: false }).defaultNow().notNull()
});

export const lotInsertSchema = z.object({
  name: z.string().min(2),
  size: z.string().min(2),
  price: z.number().int().nonnegative(),
  features: z.array(z.string()).default([]),
  status: z.string().min(2),
  description: z.string().optional().nullable(),
  imageUrl: z.string().url().optional().nullable(),
});
export type Lot = typeof lots.$inferSelect;
export type InsertLot = z.infer<typeof lotInsertSchema>;

/** Home Packages */
export const homePackages = pgTable("home_packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  size: text("size").notNull(),          // e.g. "185m²"
  price: integer("price").notNull(),
  features: jsonb("features").$type<string[]>().default([]).notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", { withTimezone: false }).defaultNow().notNull()
});

export const homePackageInsertSchema = z.object({
  name: z.string().min(2),
  bedrooms: z.number().int().nonnegative(),
  bathrooms: z.number().int().nonnegative(),
  size: z.string().min(1),
  price: z.number().int().nonnegative(),
  features: z.array(z.string()).default([]),
  description: z.string().optional().nullable(),
  imageUrl: z.string().url().optional().nullable(),
});
export type HomePackage = typeof homePackages.$inferSelect;
export type InsertHomePackage = z.infer<typeof homePackageInsertSchema>;

/** Inquiries */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 120 }).notNull(),
  lastName: varchar("last_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 64 }).notNull(),
  interest: text("interest").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: false }).defaultNow().notNull()
});

export const insertInquirySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  interest: z.string().min(1),
  message: z.string().optional().nullable(),
});
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
