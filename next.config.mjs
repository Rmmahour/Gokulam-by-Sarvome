/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/3bhk-builder-floor-faridabad-2', // the subfolder
  assetPrefix: '/3bhk-builder-floor-faridabad-2/', // ensures CSS/JS links work
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig