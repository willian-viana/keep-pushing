/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV != 'development'
  }
};

export default withPWA({
  dest: "public",         // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
  register: true,         // register the PWA service worker
  skipWaiting: true,      // skip waiting for service worker activation
})(nextConfig)
