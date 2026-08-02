import type { Database } from '../types/supabase'

type Animal = Database['public']['Tables']['animals']['Row']

export const mockAnimals: Animal[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'animals.jaguar.name',
    description: 'animals.jaguar.description',
    image_url: '/images/jaguar.png',
    video_url: '/videos/jaguar.mp4',
    display_order: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: 'd9f8c7b6-a5e4-3210-fedc-ba0987654321',
    name: 'animals.parrot.name',
    description: 'animals.parrot.description',
    image_url: '/images/parrot.jpg',
    video_url: '/videos/parrot.mp4',
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'b1c2d3e4-f5a6-7890-bcde-fa1234567890',
    name: 'animals.crocodile.name',
    description: 'animals.crocodile.description',
    image_url: '/images/crocodile.png',
    video_url: '/video/crocodile.mp4',
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 'e9f8a7b6-c5d4-3210-edcb-da0987654321',
    name: 'animals.heron.name',
    description: 'animals.heron.description',
    image_url: '/images/heron.png',
    video_url: '/video/heron.mp4',
    display_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c1d2e3f4-a5b6-7890-cdef-ab1234567890',
    name: 'animals.elephant.name',
    description: 'animals.elephant.description',
    image_url: '/images/elephant.png',
    video_url: '/video/elephant.mp4',
    display_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: 'f9a8b7c6-d5e4-3210-dcba-eb0987654321',
    name: 'animals.goose.name',
    description: 'animals.goose.description',
    image_url: '/images/goose.png',
    video_url: '/video/goose.mp4',
    display_order: 5,
    created_at: new Date().toISOString(),
  }
]
