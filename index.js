import { resolve } from 'path'

module.exports.meta = require('./package.json')

export default function (moduleOptions) {
  const options = Object.assign({},
    this.options.nuxtBootstrap,
    moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
  })
}
