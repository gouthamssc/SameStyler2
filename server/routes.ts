import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dashboard API endpoints
  app.get('/api/developer-usage', (req, res) => {
    res.json({
      totalDevelopers: 250,
      totalProjects: 1234,
      totalBuilds: 22899,
      totalCommits: 88653,
      appTypesDistribution: {
        web: 45,
        mobile: 35,
        api: 20
      }
    });
  });

  app.get('/api/production-usage', (req, res) => {
    res.json({
      apiRequests: 35692,
      activeUsers: 1234,
      errorRate: "99.9%"
    });
  });

  app.get('/api/platform-visits', (req, res) => {
    res.json({
      visitorsPerDay: 35692
    });
  });

  app.get('/api/app-usage', (req, res) => {
    res.json({
      byUsers: [
        { name: "App Name", value: 4567, change: "+22%" },
        { name: "App Name", value: 3242, change: "+5%" },
        { name: "App Name", value: 2832, change: "-10%" },
        { name: "App Name", value: 2234, change: "+18%" },
        { name: "App Name", value: 1086, change: "-23%" }
      ],
      byRequests: [
        { name: "App Name", value: 4567, change: "+22%" },
        { name: "App Name", value: 3242, change: "-5%" },
        { name: "App Name", value: 2832, change: "+12%" },
        { name: "App Name", value: 2234, change: "+16%" },
        { name: "App Name", value: 1086, change: "+22%" }
      ],
      byCost: [
        { name: "App Name", value: 4567, change: "+22%" },
        { name: "App Name", value: 3242, change: "-3%" },
        { name: "App Name", value: 2832, change: "-10%" },
        { name: "App Name", value: 2234, change: "+22%" },
        { name: "App Name", value: 1086, change: "+27%" }
      ]
    });
  });

  app.get('/api/health-metrics', (req, res) => {
    res.json({
      totalIncidents: 23,
      slaPerformance: "99.9%",
      monthlyCost: "$22,547"
    });
  });

  app.get('/api/platform-releases', (req, res) => {
    res.json({
      releases: [
        {
          version: "Version 2.1.2",
          date: "01 Dec 2024",
          description: "Performance improvements"
        },
        {
          version: "Version 2.1.1",
          date: "25 Nov 2024",
          description: "Performance improvements"
        }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
