"use client";

import { useState } from "react";

type Car = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
};

export default function CarList({ products, whatsappNumber }: { products: Car[]; whatsappNumber: string }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((car) =>
    car.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 24px", backgroundColor: "#f7f7f9" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Rechercher un véhicule (ex: Toyota, Mazda...)"
          style={{ width: "100%", maxWidth: "400px", padding: "10px 16px", borderRadius: "24px", border: "2px solid #1a1a2e", fontSize: "14px" }}
        />
      </div>

      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Nos véhicules disponibles</h2>
        {filtered.length === 0 ? (
          <p style={{ color: "#888" }}>Aucun véhicule ne correspond à votre recherche.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {filtered.map((car) => {
              const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${car.name} (${car.price?.toLocaleString()} FCFA)`);
              return (
                <a
                  key={car.id}
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit", border: "1px solid #e0e0e0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "block" }}
                >
                  <div style={{ width: "100%", height: "180px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
                    {car.image_url ? (
                      <img src={car.image_url} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span>Photo à venir</span>
                    )}
                  </div>
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{car.name}</h3>
                    <p style={{ color: "#666", fontSize: "14px", marginBottom: "12px" }}>{car.description}</p>
                    <p style={{ fontWeight: "bold", fontSize: "18px", color: "#1a1a2e" }}>{car.price?.toLocaleString()} FCFA</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}