export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "SENTRANSCOM SAURL",

    url: "https://sentranscom.com",

    logo: "https://sentranscom.com/images/logo/sentranscom-logo.png",

    email: "mailto:sentranscom221@gmail.com",

    telephone: "+221774234210",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Près de la SMT (Ex Volvo)",
      addressLocality: "Diamniadio",
      addressRegion: "Dakar",
      postalCode: "",
      addressCountry: "SN",
    },

    areaServed: {
      "@type": "Country",
      name: "Sénégal",
    },

    description:
      "SENTRANSCOM SAURL est une entreprise sénégalaise spécialisée dans le transport, la logistique, le BTP, le terrassement, l'exploitation de carrière, l'aménagement de pistes et la vente de pièces détachées.",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+221774234210",
      contactType: "customer service",
      areaServed: "SN",
      availableLanguage: ["fr", "wo"],
    },

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}