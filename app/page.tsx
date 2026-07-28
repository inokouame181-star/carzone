import { supabase } from "./lib/supabase";
import CarList from "./CarList";

export default async function Home() {
  const { data: products } = await supabase.from("products").select("*");
  const whatsappNumber = "2250713894623";

  const brands = ["Toyota", "Hyundai", "Mazda", "Kia", "Suzuki", "Mitsubishi", "Ford", "Geely", "Et Autres"];

  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
      {/* Barre de navigation */}
      <nav style={{ display: "flex", alignItems: "center", padding: "14px 24px", borderBottom: "1px solid #eee", flexWrap: "wrap", gap: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
            🚗
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#1a1a2e", lineHeight: "1.1" }}>CarZone.CI</div>
            <div style={{ fontSize: "11px", color: "#888" }}>Voitures d'occasion de confiance</div>
          </div>
        </div>
      </nav>

      {/* Bannière d'accueil */}
      <header
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,46,0.8), rgba(26,26,46,0.85)), url('https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "12px", fontWeight: "bold" }}>
          Votre Voiture d'Occasion de Confiance en 🇨🇮
        </h1>
        <p style={{ color: "#eee", fontSize: "18px", marginBottom: "8px", maxWidth: "700px", margin: "0 auto 8px" }}>
          Chez CarZone.CI, nous sélectionnons rigoureusement chaque véhicule pour vous garantir
          qualité, transparence et tranquillité d'esprit.
        </p>
        <p style={{ color: "#ccc", fontSize: "15px", marginBottom: "32px" }}>
          Achat sécurisé · Prix justes · Contact direct avec nos experts
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px", marginBottom: "12px" }}>
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>+50</div>
            <div style={{ color: "#ccc", fontSize: "13px" }}>Véhicules vendus</div>
          </div>
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>100%</div>
            <div style={{ color: "#ccc", fontSize: "13px" }}>Véhicules vérifiés</div>
          </div>
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>24/7</div>
            <div style={{ color: "#ccc", fontSize: "13px" }}>Support client</div>
          </div>
        </div>
      </header>

      {/* Grille de voitures avec recherche */}
      <CarList products={products || []} whatsappNumber={whatsappNumber} />

      {/* Pourquoi nous choisir */}
      <section style={{ padding: "50px 20px", backgroundColor: "#f7f7f9" }}>
        <h2 style={{ fontSize: "26px", textAlign: "center", marginBottom: "36px" }}>Pourquoi choisir CarZone.CI ?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", maxWidth: "1200px", margin: "0 auto 48px" }}>
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

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
            Depuis sa création, CarZone.CI s'est donné pour mission de transformer l'expérience d'achat
            et de vente de voitures d'occasion en Côte d'Ivoire. Nous savons combien il peut être difficile
            de trouver un véhicule fiable, à un prix juste, auprès d'un vendeur de confiance. C'est exactement
            le problème que nous résolvons.
          </p>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
            Chez CarZone.CI, chaque véhicule proposé sur notre plateforme est soigneusement sélectionné
            et vérifié avant sa mise en vente. Nous croyons que la transparence est la base d'une relation
            de confiance : c'est pourquoi nous fournissons des descriptions détaillées, honnêtes et précises
            pour chaque voiture — kilométrage, état mécanique, équipements, année, et toutes les informations
            essentielles pour vous permettre de faire un choix éclairé.
          </p>
          <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
            Notre engagement ne s'arrête pas à la vente. Nous sommes joignables directement via WhatsApp,
            pour répondre rapidement à toutes vos questions, organiser une visite, ou vous accompagner
            dans votre décision. Que vous soyez à Abidjan ou ailleurs en Côte d'Ivoire, nos experts sont
            disponibles pour vous conseiller avec professionnalisme et réactivité.
          </p>

          <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px" }}>
            Notre vision est simple : faire de CarZone.CI la référence en Côte d'Ivoire pour l'achat
            et la vente de véhicules d'occasion, en alliant confiance, accessibilité et service client
            irréprochable. Chaque jour, nous travaillons pour élargir notre catalogue et améliorer
            votre expérience, parce que votre satisfaction est notre priorité.
          </p>
          <p style={{ color: "#1a1a2e", fontSize: "16px", fontWeight: "bold", textAlign: "center", marginTop: "24px" }}>
            CarZone.CI — Roulez en toute confiance.
          </p>
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

      {/* Réservation */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f7f7f9" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "white", borderRadius: "16px", padding: "36px 28px", boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ fontSize: "36px", marginBottom: "8px" }}>📋</div>
            <h2 style={{ fontSize: "24px", marginBottom: "8px", color: "#1a1a2e" }}>Réservez le véhicule de votre choix</h2>
            <p style={{ color: "#777", fontSize: "14px" }}>
              Vous avez trouvé la voiture qu'il vous faut ? Réservez-la dès maintenant, nous vous recontacterons rapidement.
            </p>
          </div>
          <form action="/api/reservation" method="POST" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "bold", color: "#333", marginBottom: "4px", display: "block" }}>Nom complet</label>
              <input name="full_name" required placeholder="Ex: Konan Yao" style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "bold", color: "#333", marginBottom: "4px", display: "block" }}>Numéro de téléphone</label>
              <input name="phone" required placeholder="Ex: 07 00 00 00 00" style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "bold", color: "#333", marginBottom: "4px", display: "block" }}>Véhicule souhaité</label>
              <input name="car_name" required placeholder="Ex: Mazda CX-5 2020" style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ fontSize: "13px", fontWeight: "bold", color: "#333", marginBottom: "4px", display: "block" }}>Message (optionnel)</label>
              <textarea name="message" placeholder="Précisions ou questions..." rows={3} style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #ddd", fontSize: "14px", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
            <button type="submit" style={{ backgroundColor: "#1a1a2e", color: "white", padding: "16px", borderRadius: "10px", border: "none", fontWeight: "bold", fontSize: "16px", cursor: "pointer", marginTop: "8px" }}>
              ✅ Réserver ce véhicule
            </button>
          </form>
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
          © {new Date().getFullYear()} CarZone.CI . Tous droits réservés.
        </p>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
        }}
      >
        <span
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            color: "#1a1a2e",
            padding: "10px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
          }}
        >
          Contacter un expert
        </span>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.837.744 5.5 2.04 7.803L0 32l8.4-2.005A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.2c-2.5 0-4.85-.72-6.82-1.96l-.49-.3-5.06 1.21 1.24-4.93-.32-.51A13.13 13.13 0 012.8 16C2.8 8.73 8.73 2.8 16 2.8S29.2 8.73 29.2 16 23.27 29.2 16 29.2zm7.2-9.85c-.4-.2-2.34-1.16-2.7-1.29-.36-.13-.62-.2-.88.2-.26.4-1.01 1.29-1.24 1.55-.23.26-.45.29-.85.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.06-1.98-2.36-2.21-2.76-.23-.4-.02-.61.18-.81.18-.18.4-.46.6-.7.2-.23.26-.4.4-.66.13-.26.06-.5-.03-.7-.1-.2-.88-2.12-1.2-2.9-.32-.76-.65-.66-.88-.67h-.75c-.26 0-.7.1-1.07.5-.36.4-1.4 1.37-1.4 3.34s1.44 3.87 1.63 4.14c.2.26 2.83 4.32 6.86 6.06.96.41 1.71.66 2.29.85.96.3 1.84.26 2.53.16.77-.11 2.34-.96 2.67-1.88.33-.92.33-1.71.23-1.88-.1-.16-.36-.26-.76-.46z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}