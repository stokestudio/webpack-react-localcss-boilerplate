# Webpack / React / Local CSS Boilerplate

## Features
- ES2015 / Babel (stage 0)
- Webpack 2 (beta)
- React with react-router
- Client-side
  - CSS Autoprefixer
  - Postcss calc, mixins, and pxtorem
  - Optimized cross-browser font rendering
  - HTML responsive meta tag
- Development
  - Hot reloading of React components and CSS
- Production
  - Minified asset builds (both JS and CSS) with JS tree shaking
  - Basic server boilerplate
  - Ready for Heroku deployment
    - Automatic asset builds on push
    - Optimized node flags for running server
- Supported Browsers: last 2 major versions of current browsers + IE11
  - Configured in CSS Autoprefixer
  - Promise polyfill for IE11

## Running things

### Development
To run dev server with hot reloading:
```bash
npm run dev
```

### Production
To build production assets:
```bash
npm run build
```
*These will auto-build on push if deployed to Heroku.*
