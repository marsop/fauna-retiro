import type { Database } from '../types/supabase'

type Animal = Database['public']['Tables']['animals']['Row']

export const mockAnimals: Animal[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Jaguar',
    description: 'The largest cat in the Americas, known for its beautiful spotted coat and powerful bite.',
    image_url: '/images/jaguar.png',
    video_url: '/videos/jaguar.mp4',
    display_order: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: 'b3c14c53-b827-4a6c-b3a7-33d3cf6e1544',
    name: 'Red Squirrel',
    description: 'Look near the trees! It has brown fur and a bushy tail.',
    image_url: '/images/red-squirrel.jpg',
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c8e03004-9a8d-4e94-8178-58de2086e3f8',
    name: 'Mallard Duck',
    description: 'Check near the water! You might hear it quack.',
    image_url: '/images/mallard-duck.jpg',
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '6fa3f793-1b91-49b8-a63e-42c237f3747b',
    name: 'Monarch Butterfly',
    description: 'Look around the flowers. It has orange and black wings!',
    image_url: '/images/monarch-butterfly.jpg',
    display_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: '284d7cb0-e54e-4f76-8809-906fb3c25b04',
    name: 'Ladybug',
    description: 'Search the leaves. It is small, red, and has black spots.',
    image_url: '/images/ladybug.jpg',
    display_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: '8664b9fc-ff43-4e3a-9694-0cfb2e6a1cd0',
    name: 'Green Frog',
    description: 'Look closely near the pond. It jumps high!',
    image_url: '/images/green-frog.jpg',
    display_order: 5,
    created_at: new Date().toISOString(),
  }
]
