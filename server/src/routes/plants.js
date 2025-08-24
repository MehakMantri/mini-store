import { Router } from "express";
import Joi from "joi";
import Plant from "../models/Plant.js";
import { validateBody } from "../middleware/validate.js";

const router = Router();

// Create (Admin)
const plantSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
  categories: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string().min(2).max(50)).min(1),
      Joi.string().min(2) // allow comma-separated client string
    )
    .required(),
  inStock: Joi.boolean().required(),
});

router.post("/", validateBody(plantSchema), async (req, res) => {
  try {
    const { name, price, categories, inStock } = req.body;
    const cats = Array.isArray(categories)
      ? categories
      : String(categories)
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
    const doc = await Plant.create({ name, price, categories: cats, inStock });
    res.status(201).json({ data: doc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create plant" });
  }
});

// List + Search + Filter + Pagination
// GET /api/plants?q=money&category=Indoor&available=true&page=1&limit=24
router.get("/", async (req, res) => {
  try {
    const { q, category, available, page = 1, limit = 100 } = req.query;
    const filter = {};

    if (typeof available !== "undefined") {
      filter.inStock = String(available).toLowerCase() === "true";
    }

    if (category) {
      filter.categories = { $in: [category] };
    }

    if (q) {
      // case-insensitive search in name and category keywords
      const regex = new RegExp(q, "i");
      filter.$or = [{ name: regex }, { categories: regex }];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Plant.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Plant.countDocuments(filter),
    ]);

    res.json({ data: items, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch plants" });
  }
});

// GET unique categories
router.get("/categories", async (_req, res) => {
  try {
    const cats = await Plant.distinct("categories");
    cats.sort((a, b) => a.localeCompare(b));
    res.json({ data: cats });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

export default router;
