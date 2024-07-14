import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.alias['@images'] = path.resolve('./public/images');
    return config;
  },
};

export default nextConfig;
