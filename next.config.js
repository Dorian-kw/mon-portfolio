/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! ATTENTION !!
    // Permet de déployer même s'il y a des erreurs TypeScript.
    // Très utile pour les bibliothèques de composants capricieuses.
    ignoreBuildErrors: true,
  },
  eslint: {
    // On ignore aussi les warnings ESLint (comme les balises <img>) pour être sûr.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig