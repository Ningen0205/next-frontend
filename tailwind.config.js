const moduleExt = '{js,ts,jsx,tsx}';
module.exports = {
  content: [`./src/pages/**/*.${moduleExt}`, `./src/components/**/*.${moduleExt}`],
  theme: {
    extend: {},
  },
  plugins: [],
};
