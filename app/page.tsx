import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: products } = await supabase.from("products").select("*");
  const whatsappNumber = "2250713894623";

  const brands = ["Toyota", "Hyundai", "Mazda", "Kia", "Suzuki", "Mitsubishi", "Ford", "Geely"];

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
      {/* Barre de navigation */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid #eee", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1a1a2e" }}>🚗 CarZone CI</div>
        <input
          type="text"
          placeholder="Rechercher un véhicule..."
          style={{ flex: "1", minWidth: "200px", maxWidth: "400px", padding: "10px 16px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#25D366", color: "white", padding: "10px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}
        >
          💬 WhatsApp
        </a>
      </nav>

      {/* Bannière d'accueil */}
      <header
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.75)), url('https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "12px", fontWeight: "bold" }}>
          Achetez & Vendez Vos Voitures Facilement 🇨🇮
        </h1>
        <p style={{ color: "#eee", fontSize: "18px", marginBottom: "24px" }}>
          Le concessionnaire de confiance pour l'achat de véhicules en Côte d'Ivoire
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#25D366", color: "white", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "16px" }}
        >
          💬 Discuter avec nous
        </a>
      </header>

      {/* Grille de voitures cliquables */}
      <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Nos véhicules disponibles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {products?.map((car) => {
            const message = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${car.name} (${car.price?.toLocaleString()} FCFA)`);
            return (
              <a
                key={car.id}
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", border: "1px solid #e0e0e0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "block", transition: "transform 0.15s" }}
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
      </div>

      {/* Pourquoi nous choisir */}
      <section style={{ padding: "50px 20px", backgroundColor: "#f7f7f9" }}>
        <h2 style={{ fontSize: "26px", textAlign: "center", marginBottom: "36px" }}>Pourquoi choisir CarZone CI ?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>✅</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Véhicules vérifiés</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Chaque voiture est inspectée avant la mise en vente</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>💬</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Contact direct</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Discutez avec nous en un clic sur WhatsApp</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🚗</div>
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Large choix</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Des véhicules pour tous les budgets et tous les besoins</p>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Nos marques disponibles</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {brands.map((brand) => (
            <span key={brand} style={{ padding: "10px 18px", borderRadius: "20px", backgroundColor: "#eee", fontWeight: "bold", fontSize: "14px" }}>
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Pied de page */}
      <footer style={{ backgroundColor: "#1a1a2e", color: "white", padding: "40px 20px", marginTop: "20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          <div>
            <h3 style={{ marginBottom: "12px" }}>🚗 CarZone CI</h3>
            <p style={{ color: "#ccc", fontSize: "14px" }}>Votre concessionnaire de confiance en Côte d'Ivoire</p>
          </div>
          <div>
            <h4 style={{ marginBottom: "12px" }}>Contact</h4>
            <p style={{ color: "#ccc", fontSize: "14px" }}>📞 +225 07 13 89 46 23</p>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "14px" }}>
              💬 Écrire sur WhatsApp
            </a>
          </div>
          <div>
            <h4 style={{ marginBottom: "12px" }}>À propos</h4>
            <p style={{ color: "#ccc", fontSize: "14px" }}>Achetez et vendez vos voitures facilement en toute confiance.</p>
          </div>
        </div>
        <p style={{ textAlign: "center", color: "#888", fontSize: "13px", marginTop: "32px" }}>
          © {new Date().getFullYear()} CarZone CI. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}