# Mini Plant Store 🌿

**Urvann – Software Development Intern Assignment**  
Deadline: 25th August 2025 | Submission: Public GitHub + Deployed Link  

A mini plant store web app where users can browse plants, filter by categories, and check availability. Built with **React (Vite)** frontend and **Node.js + Express + MongoDB** backend.  

---

## Features

### Plant Catalog
- Displays all plants in a grid with:
  - Name, Price, Categories, Stock Availability
- Wishlist option for favorite plants

### Search & Filter
- Search plants by name (case-insensitive)
- Search by category keyword
- Filter plants by category (Indoor, Outdoor, Succulent, etc.)

### Add Plant (Admin)
- Form to add new plants with validation:
  - Name, Price, Multiple Categories, Availability

### UI & UX
- Responsive design for desktop and mobile
- Reusable React components
- Loading and error states when fetching data

---

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Deployment:** Frontend on Vercel, Backend on Render  

---

## Setup

1. Clone the repo  
```bash
git clone <repo-url>
cd mini-store
````

2. Install backend dependencies

```bash
cd server
npm install
```

3. Install frontend dependencies

```bash
cd ../client
npm install
```

4. Run locally

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev
```

Visit `http://localhost:5173` to use the app.

---

## Environment Variables

**Backend (`server/.env`)**

```env
PORT=8080
MONGODB_URI=<your-mongodb-uri>
CORS_ORIGIN=http://localhost:5173
```

**Frontend (`client/.env`)**

```env
VITE_API_BASE_URL=http://localhost:8080
```

---

## Database

* Mini database of 50+ plants for testing
* Categories include: Indoor, Outdoor, Succulent, Air Purifying, Home Decor

---

## Deployment

* Frontend: \[Vercel Link]
* Backend: \[Render Link]
* Make sure `VITE_API_BASE_URL` points to deployed backend

---
