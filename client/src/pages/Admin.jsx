import React from "react";
import AddPlantForm from "../components/AddPlantForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 p-4">
        <AddPlantForm />
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
