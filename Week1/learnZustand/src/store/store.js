import { create } from "zustand";

const useCounterStore = create((set,get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  incrementAsync: async(delta) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const prevCount = get().count;
    set({ count: prevCount + delta });
  },
  
}));

export default useCounterStore;