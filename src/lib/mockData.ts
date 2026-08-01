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
    id: 'd9f8c7b6-a5e4-3210-fedc-ba0987654321',
    name: 'Parrot',
    description: 'Parrots are incredibly intelligent and some can even mimic human speech, with certain species knowing hundreds of words!',
    image_url: '/images/parrot.jpg',
    video_url: '/videos/parrot.mp4',
    display_order: 1,
    created_at: new Date().toISOString(),
  }
]
