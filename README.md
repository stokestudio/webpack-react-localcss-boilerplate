# Webpack / React / Local CSS Boilerplate

Features
- Babel / ES2015
- Webpack 2 (beta)
- React with react-router
- Client-side
  - CSS Autoprefixer targeting last 2 major versions of current browsers + IE11
  - Postcss calc, mixins, and pxtorem
  - Optimized cross-browser font rendering
  - HTML responsive meta tag
- Local development
  - Hot reloading of React components and CSS
- Production asset builds
  - Minification (both JS and CSS) and JS tree shaking
  - Basic server boilerplate
  - Ready for Heroku deployment
    - Automatic asset builds
    - Optimized node server flags

## Development
To run dev server with hot reloading:
```bash
npm run dev
```

## Production Build
To build production assets:
*These will auto-build if deployed to Heroku.*
```bash
npm run build
```
