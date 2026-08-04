import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuestState {
  foundAnimalIds: string[]
  animalSequence: string[]
  questStarted: boolean
  userName: string
  startTime: number | null
  endTime: number | null
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
      startTime: null,
      endTime: null,
      setUserName: (name: string) => set({ userName: name }),
      startQuest: () => set({ questStarted: true, startTime: Date.now(), endTime: null }),
      markAsFound: (id: string) =>
        set((state) => {
          const newFoundIds = state.foundAnimalIds.includes(id)
            ? state.foundAnimalIds
            : [...state.foundAnimalIds, id];

          let newEndTime = state.endTime;
          // If all animals are found and endTime isn't set yet, record it
          if (!newEndTime && newFoundIds.length > 0 && newFoundIds.length === state.animalSequence.length) {
             newEndTime = Date.now();
          }

          return {
            foundAnimalIds: newFoundIds,
            endTime: newEndTime,
          };
        }),
      resetProgress: () => set({ foundAnimalIds: [], animalSequence: [], questStarted: false, userName: '', startTime: null, endTime: null }),
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
