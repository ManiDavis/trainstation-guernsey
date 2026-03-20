// Site Settings
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  phone,
  email,
  location,
  instagramHandle,
  facebookUrl,
  youtubeUrl,
  calendlyUrl,
  primaryCtaLabel
}`

// Homepage
export const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  heroHeadline,
  heroSubheadline,
  heroCtaLabel,
  heroImage{ asset->{ url, metadata { dimensions } }, alt },
  aboutHeadline,
  aboutBio,
  aboutPhoto{ asset->{ url, metadata { dimensions } }, alt },
  aboutHighlights,
  servicesHeadline,
  servicesSubtext,
  "testimonials": testimonials[]->{
    _id,
    name,
    role,
    quote,
    rating,
    photo{ asset->{ url } }
  }
}`

// Yoga Page
export const YOGA_PAGE_QUERY = `*[_type == "yogaPage"][0]{
  headline,
  subheadline,
  introText,
  ctaText,
  ctaButtonLabel,
  locationNote,
  "classes": classes[]->{
    _id,
    title,
    classType,
    description,
    duration,
    price,
    priceNote,
    highlights,
    isOnline,
    isInPerson
  }
}`

// Program Page
export const PROGRAM_PAGE_QUERY = `*[_type == "programPage"][0]{
  headline,
  subheadline,
  trialPrice,
  fullPrice,
  pricingNote,
  trialCtaLabel,
  fullCtaLabel,
  inclusions,
  programWeeks,
  ebookHeadline,
  ebookDescription,
  ebookCover{ asset->{ url, metadata { dimensions } }, alt },
  "testimonials": testimonials[]->{
    _id,
    name,
    role,
    quote,
    rating,
    photo{ asset->{ url } }
  }
}`

// Resources Page
export const RESOURCES_PAGE_QUERY = `*[_type == "resourcesPage"][0]{
  headline,
  subheadline,
  communityHeadline,
  communityDescription,
  communityBenefits,
  communityCtaLabel,
  "featuredResources": featuredResources[]->{
    _id,
    title,
    category,
    excerpt,
    isFeatured,
    publishedAt,
    "slug": slug.current,
    coverImage{ asset->{ url, metadata { dimensions } }, alt }
  }
}`

// Contact Page
export const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0]{
  headline,
  subheadline,
  bookingHeadline,
  bookingDescription,
  calendlyUrl,
  formHeadline,
  formSubtext
}`
