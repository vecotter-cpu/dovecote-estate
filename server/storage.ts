import { lots, homePackages, inquiries, type Lot, type HomePackage, type Inquiry, type InsertLot, type InsertHomePackage, type InsertInquiry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Lots
  getAllLots(): Promise<Lot[]>;
  getLotById(id: number): Promise<Lot | undefined>;
  createLot(lot: InsertLot): Promise<Lot>;
  
  // Home Packages
  getAllHomePackages(): Promise<HomePackage[]>;
  getHomePackageById(id: number): Promise<HomePackage | undefined>;
  createHomePackage(homePackage: InsertHomePackage): Promise<HomePackage>;
  
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private lots: Map<number, Lot>;
  private homePackages: Map<number, HomePackage>;
  private inquiries: Map<number, Inquiry>;
  private currentLotId: number;
  private currentHomePackageId: number;
  private currentInquiryId: number;

  constructor() {
    this.lots = new Map();
    this.homePackages = new Map();
    this.inquiries = new Map();
    this.currentLotId = 1;
    this.currentHomePackageId = 1;
    this.currentInquiryId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize lots
    const initialLots: Lot[] = [
      {
        id: 1,
        name: "Lot 1 - Ocean Views",
        size: "650m²",
        price: 285000,
        features: ["Elevated ocean views", "North-facing aspect", "3 min walk to beach"],
        status: "available",
        description: "Level block with premium position and stunning ocean views",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.43.39%20pm_1751971535615.png"
      },
      {
        id: 2,
        name: "Lot 5 - Corner Block",
        size: "720m²",
        price: 265000,
        features: ["Large corner block", "Multiple access points", "5 min walk to cafes"],
        status: "available",
        description: "Spacious corner position with excellent garden potential",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.13.12%20pm_1751971535616.png"
      },
      {
        id: 3,
        name: "Lot 8 - Golf Course",
        size: "580m²",
        price: 295000,
        features: ["Golf course outlook", "Walk to Stanley Golf Club", "Quiet residential setting"],
        status: "available",
        description: "Premium amenity with golf course views and peaceful location",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.46.09%20pm_1751971583580.png"
      }
    ];

    // Initialize home packages
    const initialHomePackages: HomePackage[] = [
      {
        id: 1,
        name: "The Coastal Haven",
        bedrooms: 3,
        bathrooms: 2,
        size: "165m²",
        price: 645000,
        features: ["Open plan living", "Coastal-inspired design", "Outdoor entertainment area"],
        description: "Single storey home perfect for coastal living",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.43.39%20pm_1751971535615.png"
      },
      {
        id: 2,
        name: "The Stanley Retreat",
        bedrooms: 4,
        bathrooms: 3,
        size: "220m²",
        price: 785000,
        features: ["Master suite with views", "Double garage", "Gourmet kitchen"],
        description: "Elegant two storey home with panoramic windows",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.46.09%20pm_1751971583580.png"
      },
      {
        id: 3,
        name: "The Seaside Sanctuary",
        bedrooms: 4,
        bathrooms: 2,
        size: "185m²",
        price: 695000,
        features: ["Sustainable design", "Large outdoor deck", "Study/home office"],
        description: "Contemporary home with sustainable features",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.43.50%20pm_1751971535604.png"
      }
    ];

    initialLots.forEach(lot => {
      this.lots.set(lot.id, lot);
      this.currentLotId = Math.max(this.currentLotId, lot.id + 1);
    });

    initialHomePackages.forEach(homePackage => {
      this.homePackages.set(homePackage.id, homePackage);
      this.currentHomePackageId = Math.max(this.currentHomePackageId, homePackage.id + 1);
    });
  }

  async getAllLots(): Promise<Lot[]> {
    return Array.from(this.lots.values());
  }

  async getLotById(id: number): Promise<Lot | undefined> {
    return this.lots.get(id);
  }

  async createLot(insertLot: InsertLot): Promise<Lot> {
    const id = this.currentLotId++;
    const lot: Lot = { ...insertLot, id, status: insertLot.status || "available" };
    this.lots.set(id, lot);
    return lot;
  }

  async getAllHomePackages(): Promise<HomePackage[]> {
    return Array.from(this.homePackages.values());
  }

  async getHomePackageById(id: number): Promise<HomePackage | undefined> {
    return this.homePackages.get(id);
  }

  async createHomePackage(insertHomePackage: InsertHomePackage): Promise<HomePackage> {
    const id = this.currentHomePackageId++;
    const homePackage: HomePackage = { ...insertHomePackage, id, imageUrl: insertHomePackage.imageUrl || null };
    this.homePackages.set(id, homePackage);
    return homePackage;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      message: insertInquiry.message || null,
      createdAt: new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
}

// rewrite MemStorage to DatabaseStorage
export class DatabaseStorage implements IStorage {
  async getAllLots(): Promise<Lot[]> {
    return await db.select().from(lots);
  }

  async getLotById(id: number): Promise<Lot | undefined> {
    const [lot] = await db.select().from(lots).where(eq(lots.id, id));
    return lot || undefined;
  }

  async createLot(insertLot: InsertLot): Promise<Lot> {
    const [lot] = await db
      .insert(lots)
      .values(insertLot)
      .returning();
    return lot;
  }

  async getAllHomePackages(): Promise<HomePackage[]> {
    return await db.select().from(homePackages);
  }

  async getHomePackageById(id: number): Promise<HomePackage | undefined> {
    const [homePackage] = await db.select().from(homePackages).where(eq(homePackages.id, id));
    return homePackage || undefined;
  }

  async createHomePackage(insertHomePackage: InsertHomePackage): Promise<HomePackage> {
    const [homePackage] = await db
      .insert(homePackages)
      .values(insertHomePackage)
      .returning();
    return homePackage;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries);
  }
}

export const storage = new DatabaseStorage();
