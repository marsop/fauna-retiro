import { mockAnimals } from './mockData'
import type { Database } from '../types/supabase'

type Animal = Database['public']['Tables']['animals']['Row']

export const fetchAnimals = async (): Promise<Animal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAnimals)
    }, 500)
  })
}
