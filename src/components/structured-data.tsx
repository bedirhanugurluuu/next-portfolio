export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bedirhan Uğurlu",
    "jobTitle": "Frontend Developer",
    "description": "Modern web teknolojileri ile kullanıcı dostu ve etkileyici dijital deneyimler yaratıyorum.",
    "url": "https://bedirhanugurlu.dev",
    "image": "https://bedirhanugurlu.dev/images/about.jpg",
    "email": "bedirhanugurlu3661@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressRegion": "Maltepe",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://linkedin.com/in/bedirhan-ugurlu",
      "https://github.com/bedirhanugurluuu"
    ],
    "knowsAbout": [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Frontend Development"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bedirhan Uğurlu - Portfolio",
    "description": "Frontend Developer Bedirhan Uğurlu'nun portfolio websitesi",
    "url": "https://bedirhanugurlu.dev",
    "author": {
      "@type": "Person",
      "name": "Bedirhan Uğurlu"
    },
    "inLanguage": ["tr", "en"],
    "copyrightYear": "2025",
    "creator": {
      "@type": "Person",
      "name": "Bedirhan Uğurlu"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bedirhan Uğurlu",
    "url": "https://bedirhanugurlu.dev",
    "logo": "https://bedirhanugurlu.dev/logo.png",
    "description": "Frontend Development Services",
    "founder": {
      "@type": "Person",
      "name": "Bedirhan Uğurlu"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "bedirhanugurlu3661@gmail.com",
      "contactType": "customer service"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  )
}
