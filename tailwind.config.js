const moduleExt = "{js,ts,jsx,tsx}"
module.exports = {
    content: [
        `./pages/**/*.${moduleExt}`,
        `./components/**/*.${moduleExt}`,
    ],
    theme: {
        extend: {},
    },
    plugins: []
}