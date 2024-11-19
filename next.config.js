/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    basePath: '/alex-portfolio-FE',
    assetPrefix: '/alex-portfolio-FE/',
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    env: {
      BASE_PATH: process.env.NODE_ENV === 'production' ? '/alex-portfolio-FE' : '',
    },
};

module.exports = nextConfig;
