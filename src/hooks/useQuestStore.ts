import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuestState {
  foundAnimalIds: string[]
  markAsFound: (id: string) => void
  resetProgress: () => void
  isFound: (id: string) => boolean
}

export const useQuestStore = create<QuestState>()(
  persist(
    (set, get) => ({
      foundAnimalIds: [],
      markAsFound: (id: string) =>
        set((state) => ({
          foundAnimalIds: state.foundAnimalIds.includes(id)
            ? state.foundAnimalIds
            : [...state.foundAnimalIds, id],
        })),
      resetProgress: () => set({ foundAnimalIds: [] }),
      isFound: (id: string) => get().foundAnimalIds.includes(id),
    }),
    {
      name: 'fauna_quest_progress',
    }
  )
)
