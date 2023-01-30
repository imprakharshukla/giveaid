/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "ui-sans-serif"],
            },
            colors: {
                'primary': '#00BA4C',
                'secondary': '#6ED899',
                'tertiary': '#ADE792',
            }
        },
    },
    plugins: [require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),],
}