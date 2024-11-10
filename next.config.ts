
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/<My-Portfolio>', // Replace <repo-name> with your GitHub repository name
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
