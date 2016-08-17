# Webpack / React / Local CSS Boilerplate

## Features
- ES2015 / Babel (stage 0)
- Webpack 2 (beta)
- React with react-router
- Client-side
  - CSS Autoprefixer
  - Postcss calc, mixins, pxtorem, and flexbox fixes
  - Optimized cross-browser font rendering
  - HTML responsive meta tag
  - Ready for Google Analytics tracking compatible with react-router
- Development
  - Hot reloading of React components and CSS
- Production
  - Minified asset builds (both JS and CSS) with JS tree shaking
  - Splits JS assets into chunks
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

### Optimize Assets
```bash
npm run optimize
```

### Production
To build production assets:
```bash
npm run build
```
*These will auto-build on push if deployed to Heroku.*

Start server:
```bash
npm start
```

## Inspirations
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-universally](https://github.com/ctrlplusb/react-universally)
- [react-hot-load-webpack-boilerplate](https://github.com/jackfranklin/react-hot-load-webpack-boilerplate) ([Screencast](http://javascriptplayground.com/blog/2016/06/react-webpack-workflow-screencast))
