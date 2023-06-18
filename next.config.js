/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  productionBrowserSourceMaps: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.[cm]*js$/u,
      include: [/node_modules\/next\/dist/u, /node_modules\/color/u],
      exclude: [
        /app-router/,
        /node_modules\/next\/dist\/compiled\/react/u,
        /node_modules\/next\/dist\/client\/components\/(?<ignore>app-router\.|error-|lay|ren)/u,
      ],
      use: [options.defaultLoaders.babel],
    });
    config.optimization.minimize = true;

    return config;
  },
};

module.exports = nextConfig;
