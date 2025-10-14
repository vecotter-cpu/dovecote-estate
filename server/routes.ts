import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all lots
  app.get("/api/lots", async (req, res) => {
    try {
      const lots = await storage.getAllLots();
      res.json(lots);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lots" });
    }
  });

  // Get lot by ID
  app.get("/api/lots/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const lot = await storage.getLotById(id);
      if (!lot) {
        return res.status(404).json({ message: "Lot not found" });
      }
      res.json(lot);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lot" });
    }
  });

  // Get all home packages
  app.get("/api/home-packages", async (req, res) => {
    try {
      const homePackages = await storage.getAllHomePackages();
      res.json(homePackages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch home packages" });
    }
  });

  // Get home package by ID
  app.get("/api/home-packages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const homePackage = await storage.getHomePackageById(id);
      if (!homePackage) {
        return res.status(404).json({ message: "Home package not found" });
      }
      res.json(homePackage);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch home package" });
    }
  });

  // Create inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create inquiry" });
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
