# nuxt-bootstrap

Install package
```
npm install --sade-dev nuxt-bootstrap
```

Create bootstrap custom asset file 
```scss
// assets/custom.sass
@import "~bootstrap/scss/bootstrap";
```

Update nuxt config file
```js
// nuxt.config.js
export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  buildModules: [ "nuxt-bootstrap" ],
  css: [
    { src: '~/assets/custom.scss', lang: 'sass' }
  ]
}
```
