/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    basePath: '/alex-portfolio-FE',
    assetPrefix: '/alex-portfolio-FE/',
    output: 'export',
    publicRuntimeConfig: {
        basePath: '/alex-portfolio-FE', 
    },
};

module.exports = nextConfig