import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karticky site',
    short_name: 'Karticky site',
    description: 'Skvely karticky pro nauceni se siti',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/placeholder.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/placeholder.jpg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}