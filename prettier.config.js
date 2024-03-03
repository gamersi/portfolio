/** @type {import("prettier").Config} */
const config = {
    plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
};

export default config;
