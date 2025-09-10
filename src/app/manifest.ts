import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bedirhan Uğurlu - Portfolio',
    short_name: 'Bedirhan Uğurlu',
    description: 'Frontend Developer Bedirhan Uğurlu\'nun portfolio websitesi',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['portfolio', 'developer', 'frontend'],
    lang: 'tr',
    orientation: 'portrait-primary',
  }
}
