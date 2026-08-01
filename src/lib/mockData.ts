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
    id: 'b3c14c53-b827-4a6c-b3a7-33d3cf6e1544',
    name: 'animals.redSquirrel.name',
    description: 'animals.redSquirrel.description',
    image_url: '/images/red-squirrel.jpg',
    display_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'c8e03004-9a8d-4e94-8178-58de2086e3f8',
    name: 'animals.mallardDuck.name',
    description: 'animals.mallardDuck.description',
    image_url: '/images/mallard-duck.jpg',
    display_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '6fa3f793-1b91-49b8-a63e-42c237f3747b',
    name: 'animals.monarchButterfly.name',
    description: 'animals.monarchButterfly.description',
    image_url: '/images/monarch-butterfly.jpg',
    display_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: '284d7cb0-e54e-4f76-8809-906fb3c25b04',
    name: 'animals.ladybug.name',
    description: 'animals.ladybug.description',
    image_url: '/images/ladybug.jpg',
    display_order: 4,
    created_at: new Date().toISOString(),
  },
  {
    id: '8664b9fc-ff43-4e3a-9694-0cfb2e6a1cd0',
    name: 'animals.greenFrog.name',
    description: 'animals.greenFrog.description',
    image_url: '/images/green-frog.jpg',
    display_order: 5,
    created_at: new Date().toISOString(),
  }
]
