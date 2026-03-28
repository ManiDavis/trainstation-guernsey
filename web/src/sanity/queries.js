export const SITE_SETTINGS_QUERY = `
  *[_id == "siteSettings"][0]{
    phone,
    email,
    address{ line1, line2, city, postcode },
    openingHours[]{ _key, day, time },
    socialFacebook,
    socialInstagram
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
