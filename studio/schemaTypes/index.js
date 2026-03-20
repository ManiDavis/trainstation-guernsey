import { siteSettings } from './documents/siteSettings'
import { homepage } from './documents/homepage'
import { yogaPage } from './documents/yogaPage'
import { programPage } from './documents/programPage'
import { resourcesPage } from './documents/resourcesPage'
import { contactPage } from './documents/contactPage'
import { testimonial } from './documents/testimonial'
import { yogaClass } from './documents/yogaClass'
import { resource } from './documents/resource'

export const schemaTypes = [
  // Singleton pages
  siteSettings,
  homepage,
  yogaPage,
  programPage,
  resourcesPage,
  contactPage,
  // Reusable content
  testimonial,
  yogaClass,
  resource,
]
