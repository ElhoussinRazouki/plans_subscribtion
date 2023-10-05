/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PAYMENT_API: 'http://localhost:3002/api',
      },
}

module.exports = nextConfig
