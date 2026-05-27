import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sevenhood — سابع جار',
    short_name: 'Sevenhood',
    description: 'Premium Community Management Platform for Saudi Arabia',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D2818',
    theme_color: '#0D2818',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
      { src: '/icon',       sizes: '32x32',   type: 'image/png' },
    ],
  }
}
