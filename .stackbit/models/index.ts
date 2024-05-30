import { type ModelExtension } from '@stackbit/types';
import { backgroundImage } from './backgroundImage';
import { badge } from './badge';
import { actionButton } from './actionButton';
import { card } from './card';
import { cardsSection } from './cardsSection';
import { ctaSection } from './ctaSection';
import { heroSection } from './heroSection';
import { logosSection } from './logosSection';
import { page } from './page';
import { person } from './person';
import { siteConfig } from './siteConfig';
import { testimonial } from './testimonial';
import { testimonialsSection } from './testimonialsSection';

export const allModelExtensions: ModelExtension[] = [
    actionButton,
    backgroundImage,
    badge,
    card,
    cardsSection,
    ctaSection,
    heroSection,
    logosSection,
    page,
    person,
    siteConfig,
    testimonial,
    testimonialsSection
];
