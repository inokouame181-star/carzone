export default function Merci() {
  return (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px" }}>
      <div style={{ fontSize: "60px", marginBottom: "16px" }}>✅</div>
      <h1 style={{ fontSize: "28px", marginBottom: "12px" }}>Merci pour votre demande !</h1>
      <p style={{ color: "#666", fontSize: "16px", marginBottom: "24px" }}>
        Nous avons bien reçu les informations de votre véhicule. Notre équipe vous contactera très prochainement.
      </p>
      <a
        href="/"
        style={{ backgroundColor: "#1a1a2e", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}
      >
        Retour à l'accueil
      </a>
    </div>
  );
}