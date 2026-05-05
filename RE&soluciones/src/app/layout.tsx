import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'R&S Soluciones Integrales | Consultoría y Capacitación en Colombia',
  description: 'Expertos en consultoría administrativa, capacitación organizacional y suministro técnico. Potenciamos sectores público, privado y social en toda Colombia.',
  keywords: 'consultoría empresarial Colombia, asesoría administrativa, capacitación organizacional, contratación pública, servicios empresariales',
  authors: [{ name: 'R&S Soluciones Integrales S.A.S.' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "R&S Soluciones Integrales S.A.S.",
    "description": "Consultoría empresarial, capacitación organizacional y apoyo técnico en Colombia.",
    "url": "https://rys-soluciones.com", // Placeholder URL
    "telephone": "+573137788529",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombia"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Consultoría Administrativa",
        "description": "Asesoría especializada para los sectores público y privado."
      },
      {
        "@type": "Service",
        "name": "Capacitación Organizacional",
        "description": "Formación y capacitación profesional para empresas y organizaciones sociales."
      }
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
