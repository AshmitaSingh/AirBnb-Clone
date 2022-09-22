/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ['links.papareact.com', 'unsplash.com', 'jsonkeeper.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYXNobWl0YS1zaW5naCIsImEiOiJjbDI0bGN6aXUwNWZtM2ZwNmh4NTl1ZnEwIn0.XbMFCJwIjUS6RaMpktEddw'
  }
}

module.exports = nextConfig
