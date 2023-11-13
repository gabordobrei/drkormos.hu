/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid'
};

module.exports = config;
