export default function StructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowdeskio.vercel.app";
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FlowDesk",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: "AI-powered workflow automation for Indian ops teams",
      foundingLocation: "India",
      areaServed: "India",
      sameAs: [
        // Add social media links here when available
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@flowdesk.in",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
      },
    };
  
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FlowDesk",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Turn plain English instructions into automated workflows",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/PreOrder",
      },
    };
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema).replace(/</g, "\\u003c"),
          }}
        />
      </>
    );
  }