/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%'))`
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Mulish', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#ffae9c',
                    'primary-content': '#171227',
                    secondary: '#fff2d7',
                    'secondary-content': '#171227',
                    accent: '#e3f1ff',
                    'accent-content': '#171227',
                    neutral: '#2e293c',
                    'neutral-content': '#ffffff',
                    'base-100': '#171227',
                    'base-200': '#2e293c',
                    'base-content': '#ffffff',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            },
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#ffae9c',
                    'primary-content': '#171227',
                    secondary: '#fff2d7',
                    'secondary-content': '#171227',
                    accent: '#e3f1ff',
                    'accent-content': '#171227',
                    neutral: '#171227',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#d7d8e4',
                    'base-content': '#171227',
                    '--rounded-btn': '.375rem',
                    '--rounded-badge': '9999px'
                }
            }
        ]
    }
};
