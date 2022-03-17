const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'cloudinary',
    domains: ["uploads-ssl.webflow.com"],
    path: '',
  },
};

module.exports = withPlugins([[withImages]], nextConfig)