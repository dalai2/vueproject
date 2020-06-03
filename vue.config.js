/* exported variableName */
const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        'C:\\Users\\Dalai\\Documents\\vueproject\\vueproject\\src\\styles\\global.scss'
      ]
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }

};
