// Query by _type (not _id) since documents have UUID-based IDs
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    heroEyebrow,
    heroLine1,
    heroLine2,
    heroLine3,
    heroTagline,
    heroCta1,
    heroCta2,
    heroImage,
    heroStats[]{ _key, value, suffix, label },
    navLogo,
    navBrandName,
    navTagline,
    footerDescription,
    phone,
    email,
    address{ line1, line2, city, postcode },
    openingHours[]{ _key, day, time },
    socialFacebook,
    socialInstagram,
    showWhyUs,
    showGymShowcase,
    showPricing,
    showReviews,
    showContact,
    announcementEnabled,
    announcementText,
    announcementLinkLabel,
    announcementLinkUrl,
    announcementStyle,
    customSectionEnabled,
    customSectionEyebrow,
    customSectionHeading,
    customSectionBody,
    customSectionImage,
    customSectionCtaLabel,
    customSectionCtaUrl
  }
`

export const WHY_US_QUERY = `
  *[_type == "whyUs"][0]{
    eyebrow,
    heading,
    subheading,
    featureCards[]{ _key, iconKey, title, desc },
    bannerLabel,
    bannerHeading,
    bannerCta
  }
`

export const GYM_SHOWCASE_QUERY = `
  *[_type == "gymShowcase"][0]{
    eyebrow,
    heading,
    paragraph1,
    paragraph2,
    equipment[]{ _key, icon, label },
    panelBrand,
    panelBrandSub,
    statNumber,
    statLabel
  }
`

export const PRICING_QUERY = `
  *[_type == "pricingPlan"] | order(order asc){
    _id,
    name,
    category,
    price,
    priceNote,
    altPrice,
    badge,
    highlighted,
    description,
    features
  }
`

export const REVIEWS_QUERY = `
  *[_type == "review"] | order(order asc){
    _id,
    reviewerName,
    initials,
    rating,
    reviewDate,
    reviewText,
    avatarColor
  }
`
