import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuestState {
  foundAnimalIds: string[]
  animalSequence: string[]
  questStarted: boolean
  userName: string
  setUserName: (name: string) => void
  markAsFound: (id: string) => void
  resetProgress: () => void
  isFound: (id: string) => boolean
  initializeSequence: (availableIds: string[]) => void
  startQuest: () => void
}

export const useQuestStore = create<QuestState>()(
  persist(
    (set, get) => ({
      foundAnimalIds: [],
      animalSequence: [],
      questStarted: false,
      userName: '',
      setUserName: (name: string) => set({ userName: name }),
      startQuest: () => set({ questStarted: true }),
      markAsFound: (id: string) =>
        set((state) => ({
          foundAnimalIds: state.foundAnimalIds.includes(id)
            ? state.foundAnimalIds
            : [...state.foundAnimalIds, id],
        })),
      resetProgress: () => set({ foundAnimalIds: [], animalSequence: [], questStarted: false, userName: '' }),
      isFound: (id: string) => get().foundAnimalIds.includes(id),
      initializeSequence: (availableIds: string[]) =>
        set((state) => {
          const missingIds = availableIds.filter(id => !state.animalSequence.includes(id));
          if (missingIds.length === 0) {
            return state;
          }
          // Shuffle the missing IDs
          const shuffled = [...missingIds].sort(() => Math.random() - 0.5);
          return { animalSequence: [...state.animalSequence, ...shuffled] };
        }),
    }),
    {
      name: 'fauna_quest_progress',
    }
  )
)
