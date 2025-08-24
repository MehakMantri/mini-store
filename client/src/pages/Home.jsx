import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState(null); // null = all, true = in stock, false = out of stock

  const categories = [
    "Indoor",
    "Outdoor",
    "Succulent",
    "Air Purifying",
    "Home Decor",
  ];

  // Fetch plants from API
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/plants");
        console.log("API Response:", res.data);

        // ✅ plants ka array nikalna
        setPlants(res.data.data);
        setFiltered(res.data.data);
      } catch (err) {
        console.error("Error fetching plants:", err);
      }
    };
    fetchPlants();
  }, []);

  // Filtering logic
  useEffect(() => {
    let results = plants;

    if (query) {
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          (p.categories &&
            p.categories.some((cat) =>
              cat.toLowerCase().includes(query.toLowerCase())
            ))
      );
    }

    if (category) {
      results = results.filter(
        (p) =>
          p.categories &&
          p.categories
            .map((c) => c.toLowerCase())
            .includes(category.toLowerCase())
      );
    }
    if (availability !== null) {
      results = results.filter(
        (p) => (p.inStock ?? p.available) === availability
      );
    }

    setFiltered(results);
  }, [query, category, plants, availability]);

  const handleAvailabilityClick = (isAvailable) => {
    setAvailability(isAvailable);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <Navbar />
      <main className="flex-1 px-2 sm:px-8 py-4">
        {/* Hero Section */}
        <section className="rounded-xl bg-gradient-to-r from-green-600 via-green-400 to-green-200 text-white p-6 mb-8 flex flex-col sm:flex-row items-center justify-between shadow-lg">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 drop-shadow-lg">
              Welcome to Urvann Mini Store
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-4">
              Discover, shop, and bring home beautiful plants for every space.
            </p>
            <a
              href="#catalog"
              className="inline-block bg-white text-green-700 font-bold px-6 py-2 rounded-full shadow hover:bg-green-100 transition"
            >
              Shop Now
            </a>
          </div>

          <img
            src="https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=1024x1024&w=is&k=20&c=QEU95vPncHAk_iSdIR5ZrswomfmtGUjdam0dNjd7O1Q="
            alt="Plants"
            className="rounded-xl w-40 sm:w-64 shadow-lg border-4 border-white"
          />
        </section>
        {/* Search & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <SearchBar query={query} setQuery={setQuery} />
          <FilterDropdown
            categories={categories}
            selected={category}
            setSelected={setCategory}
          />
        </div>
        {/* Plant Catalog */}
        <section id="catalog">
          <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
            🌿 Plant Catalog
          </h2>
          {availability !== null && (
            <div className="mb-4 text-center">
              <button
                className="bg-gray-200 text-green-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-300 transition"
                onClick={() => setAvailability(null)}
              >
                Clear Availability Filter
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.length > 0 ? (
              filtered.map((plant) => (
                <PlantCard
                  key={plant._id}
                  plant={plant}
                  onAvailabilityClick={handleAvailabilityClick}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No plants found 🌱
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
