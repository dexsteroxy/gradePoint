// /** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // other configurations...
}

export default nextConfig;