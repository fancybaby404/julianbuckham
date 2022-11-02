/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

// THREEjs
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com']
  },
}