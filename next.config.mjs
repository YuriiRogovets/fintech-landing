/** @type {import('next').NextConfig} */


const nextConfig = {
 webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,                // каже Webpack ловити всі файли .svg
      issuer: /\.[jt]sx?$/,          // тільки коли SVG імпортується з .js, .jsx, .ts або .tsx файлів
      use: ['@svgr/webpack'],        // обробити через SVGR → перетворює SVG на React-компонент
    });
    return config;
  },

};

export default nextConfig;
