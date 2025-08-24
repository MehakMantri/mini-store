import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

const PlantGrid = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/plants`);
        setPlants(res.data);
      } catch (err) {
        setError("Failed to load plants");
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, []);

  if (loading) return <p className="text-center">🌱 Loading plants...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;
