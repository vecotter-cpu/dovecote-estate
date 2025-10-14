import { db } from "./db";
import { lots, homePackages } from "@shared/schema";
import { sql, count } from "drizzle-orm";

async function run() {
  const lotCount = await db.select({ count: count() }).from(lots).then(res => res[0]?.count ?? 0);
  const hpCount = await db.select({ count: count() }).from(homePackages).then(res => res[0]?.count ?? 0);

  if (lotCount === 0) {
    await db.insert(lots).values([
      {
        name: "Lot 1 - Ocean Views",
        size: "650m²",
        price: 285000,
        features: ["Elevated ocean views", "North-facing aspect", "3 min walk to beach"],
        status: "available",
        description: "Level block with premium position and stunning ocean views",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.43.39%20pm_1751971535615.png"
      },
      {
        name: "Lot 5 - Corner Block",
        size: "720m²",
        price: 265000,
        features: ["Large corner block", "Multiple access points", "5 min walk to cafes"],
        status: "available",
        description: "Spacious corner position with excellent garden potential",
        imageUrl: "/attached_assets/Screen%20Shot%202025-07-08%20at%208.13.12%20pm_1751971535616.png"
      }
    ]);
  }

  if (hpCount === 0) {
    await db.insert(homePackages).values([
      {
        name: "Seaside Serenity – Lot 17",
        bedrooms: 3,
        bathrooms: 2,
        size: "197m²",
        price: 783000,
        features: ["Master with ensuite and walk in robe", "Bedrooms with built in robes", "Quality fixtures and fittings", "6 star energy rating minimum", "Double glazed windows & doors", "Panel lift garage door", "Concrete alfresco"],
        description: "A refined coastal retreat with light-filled living and effortless indoor–outdoor flow.",
        imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR197.jpg"
      },
      {
        name: "The Horizon – Lot 15",
        bedrooms: 4,
        bathrooms: 2,
        size: "228m²",
        price: 841000,
        features: ["4 Bedrooms", "2 Living rooms", "2 Bathrooms", "Double garage", "Panel lift garage door", "9kw Heatpump", "Timber Deck"],
        description: "Expansive family living with generous entertaining spaces and sweeping coastal outlooks.",
        imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR-228.jpg"
      },
      {
        name: "The Bayview – Lot 23",
        bedrooms: 3,
        bathrooms: 2,
        size: "185m²",
        price: 750000,
        features: ["3 Bedrooms", "2 Bathrooms", "1 Living Area", "Double Garage", "9kw Heat Pump", "Quality Fixtures Throughout", "Panel Lift Garage Door", "Timber Deck"],
        description: "Classic coastal elegance capturing morning light, sea breezes and everyday comfort.",
        imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2023/08/JDR185.jpg"
      },
      {
        name: "The Hideaway – Lot 24",
        bedrooms: 3,
        bathrooms: 2,
        size: "130m²",
        price: 635000,
        features: ["Bedrooms with built in robes", "Quality fixtures and fittings", "6 star energy rating minimum", "Custom joinery throughout", "Colorbond roof", "Double glazed windows & doors", "Panel lift garage door"],
        description: "A compact designer escape—low-maintenance, stylish and perfectly positioned for weekends.",
        imageUrl: "https://www.jdrhomes.com.au/wp-content/uploads/2021/09/JDR130-1.jpg"
      }
    ]);
  }

  console.log("Seed complete.");
  process.exit(0);
}

run().catch((e) => { console.error(e); process.exit(1); });
