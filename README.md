# nuxt-bootstrap

Install package
```
npm install --sade-dev nuxt-bootstrap
```

Add module to nuxt config (nuxt.config.js)
```js
export default {
  buildModules: [
    "nuxt-bootstrap"
  ]
}
```

Create bootstrap asset file (assets/bootstrap.sass)
```scss
// scss-docs-start import-stack
// Configuration
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";

// Layout & components
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/accordion";
@import "~bootstrap/scss/breadcrumb";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/alert";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/toasts";
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/tooltip";
@import "~bootstrap/scss/popover";
@import "~bootstrap/scss/carousel";
@import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/offcanvas";

// Helpers
@import "~bootstrap/scss/helpers";

// Utilities
@import "~bootstrap/scss/utilities/api";
// scss-docs-end import-stack
```

Add bootstrap to nuxt config (nuxt.config.js)
```js
export default {
  css: [
      { src: '~/assets/bootstrap.scss', lang: 'sass' }
    ]
}
```
