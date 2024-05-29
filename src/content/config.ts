import { defineCollection, reference, z } from 'astro:content';

const imageSchema = z.object({
    type: z.literal('Image'),
    src: z.string(),
    alt: z.string().optional()
});

const backgroundImageSchema = z.object({
    type: z.literal('BackgroundImage'),
    image: imageSchema.optional(),
    opacity: z.number().optional()
});

const badgeSchema = z.object({
    type: z.literal('Badge'),
    text: z.string(),
    theme: z.enum(['primary', 'secondary', 'accent', 'neutral']).optional()
});

const buttonSchema = z.object({
    type: z.literal('Button'),
    label: z.string(),
    ariaLabel: z.string().optional(),
    url: z.string(),
    variant: z.enum(['solid', 'outline', 'text']).optional(),
    theme: z.enum(['primary', 'secondary', 'accent', 'neutral']).optional()
});

const cardSchema = z.object({
    type: z.literal('Card'),
    badge: badgeSchema.optional(),
    heading: z.string().optional(),
    body: z.string().optional(),
    cta: buttonSchema.optional(),
    image: imageSchema.optional(),
    theme: z.enum(['light', 'dark', 'none']).optional(),
    textAlign: z.enum(['left', 'center']).optional(),
    hasBorder: z.boolean().optional()
});

const personSchema = z.object({
    type: z.literal('Person'),
    name: z.string(),
    title: z.string().optional(),
    image: imageSchema.optional()
});

const testimonialSchema = z.object({
    type: z.literal('Testimonial'),
    badge: badgeSchema.optional(),
    quote: z.string(),
    author: personSchema.optional(),
    theme: z.enum(['light', 'dark']).optional(),
    hasBorder: z.boolean().optional()
});

const commonSectionFields = {
    width: z.enum(['full', 'inset']).optional(),
    theme: z.enum(['light', 'dark']).optional(),
    backgroundImage: backgroundImageSchema.optional()
};

const cardsSchema = z.object({
    type: z.literal('Cards'),
    heading: z.string().optional(),
    body: z.string().optional(),
    items: z.array(cardSchema).optional(),
    columns: z.enum(['one', 'two', 'three']).optional(),
    ...commonSectionFields
});

const ctaSchema = z.object({
    type: z.literal('Cta'),
    heading: z.string().optional(),
    body: z.string().optional(),
    cta: z.array(buttonSchema).optional(),
    ...commonSectionFields
});

const heroSchema = z.object({
    type: z.literal('Hero'),
    heading: z.string().optional(),
    body: z.string().optional(),
    cta: z.array(buttonSchema).optional(),
    ...commonSectionFields
});

const logosSchema = z.object({
    type: z.literal('Logos'),
    heading: z.string().optional(),
    body: z.string().optional(),
    logos: z.array(imageSchema).optional(),
    motion: z.enum(['static', 'moveToLeft', 'moveToRight']).optional(),
    ...commonSectionFields
});

const testimonialsSchema = z.object({
    type: z.literal('Testimonials'),
    heading: z.string().optional(),
    body: z.string().optional(),
    testimonials: z.array(testimonialSchema).optional(),
    columns: z.enum(['one', 'two']).optional(),
    ...commonSectionFields
});

const pages = defineCollection({
    schema: z.object({
        type: z.literal('Page'),
        title: z.string(),
        sections: z.array(z.union([cardsSchema, ctaSchema, heroSchema, logosSchema, testimonialsSchema])).optional(),
        metaTitle: z.string().min(5).max(120).optional(),
        addTitleSuffix: z.boolean().optional(),
        metaDescription: z.string().min(15).max(160).optional(),
        socialImage: imageSchema.optional(),
        theme: z.enum(['light', 'dark']).optional()
    })
});

export const collections = { pages };
