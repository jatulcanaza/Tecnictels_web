import { Helmet } from "react-helmet-async";
import { site } from "../content/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string; // /servicios
  image?: string; // /brand/og.jpg (si luego creamos)
};

export function Seo({ title, description, path = "/", image = "/brand/logo.png" }: SeoProps) {
  const canonical = `https://${site.domain}${path}`;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    areaServed: `${site.city}, ${site.country}`,
    email: site.email,
    url: canonical,
    sameAs: [site.social.facebook, site.social.instagram],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://${site.domain}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
    </Helmet>
  );
}