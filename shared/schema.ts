import { pgTable, text, serial, integer, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Main tables schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const developerMetrics = pgTable("developer_metrics", {
  id: serial("id").primaryKey(),
  totalDevelopers: integer("total_developers").notNull(),
  totalProjects: integer("total_projects").notNull(),
  totalBuilds: integer("total_builds").notNull(),
  totalCommits: integer("total_commits").notNull(),
  appTypesDistribution: json("app_types_distribution").notNull(),
  period: text("period").notNull(), // last30days, thisQuarter, thisYear
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const productionMetrics = pgTable("production_metrics", {
  id: serial("id").primaryKey(),
  apiRequests: integer("api_requests").notNull(),
  activeUsers: integer("active_users").notNull(),
  errorRate: text("error_rate").notNull(),
  visitorsPerDay: integer("visitors_per_day").notNull(),
  period: text("period").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const appUsageMetrics = pgTable("app_usage_metrics", {
  id: serial("id").primaryKey(),
  appUsageData: json("app_usage_data").notNull(),
  period: text("period").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const healthMetrics = pgTable("health_metrics", {
  id: serial("id").primaryKey(),
  totalIncidents: integer("total_incidents").notNull(),
  slaPerformance: text("sla_performance").notNull(),
  monthlyCost: text("monthly_cost").notNull(),
  period: text("period").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const platformReleases = pgTable("platform_releases", {
  id: serial("id").primaryKey(),
  version: text("version").notNull(),
  releaseDate: text("release_date").notNull(),
  description: text("description").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDeveloperMetricsSchema = createInsertSchema(developerMetrics).omit({
  id: true,
  timestamp: true,
});

export const insertProductionMetricsSchema = createInsertSchema(productionMetrics).omit({
  id: true,
  timestamp: true,
});

export const insertAppUsageMetricsSchema = createInsertSchema(appUsageMetrics).omit({
  id: true,
  timestamp: true,
});

export const insertHealthMetricsSchema = createInsertSchema(healthMetrics).omit({
  id: true,
  timestamp: true,
});

export const insertPlatformReleaseSchema = createInsertSchema(platformReleases).omit({
  id: true,
  timestamp: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertDeveloperMetrics = z.infer<typeof insertDeveloperMetricsSchema>;
export type DeveloperMetrics = typeof developerMetrics.$inferSelect;

export type InsertProductionMetrics = z.infer<typeof insertProductionMetricsSchema>;
export type ProductionMetrics = typeof productionMetrics.$inferSelect;

export type InsertAppUsageMetrics = z.infer<typeof insertAppUsageMetricsSchema>;
export type AppUsageMetrics = typeof appUsageMetrics.$inferSelect;

export type InsertHealthMetrics = z.infer<typeof insertHealthMetricsSchema>;
export type HealthMetrics = typeof healthMetrics.$inferSelect;

export type InsertPlatformRelease = z.infer<typeof insertPlatformReleaseSchema>;
export type PlatformRelease = typeof platformReleases.$inferSelect;
