// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import actionButton from './actionButton'
import actionLink from './actionLink'
import backgroundImage from './backgroundImage'
import badge from './badge'
import card from './card'
import cardsSection from './cardsSection'
import company from './company'
import ctaSection from './ctaSection'
import customImage from './customImage'
import footer from './footer'
import header from './header'
import heroSection from './heroSection'
import logosSection from './logosSection'
import page from './page'
import person from './person'
import siteConfig from './siteConfig'
import testimonial from './testimonial'
import testimonialsSection from './testimonialsSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'astro-sanity-starter',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    actionButton,
    actionLink,
    backgroundImage,
    badge,
    card,
    cardsSection,
    company,
    ctaSection,
    customImage,
    footer,
    header,
    heroSection,
    logosSection,
    page,
    person,
    siteConfig,
    testimonial,
    testimonialsSection,
  ]),
})
