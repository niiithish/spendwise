import { create } from "zustand";

type CounterStore = {
  count: number;
  incremnet: () => void;
  decremnet: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  incremnet: () => {
    set({ count: 1 });
  },
  decremnet: () => {
    set({ count: -1 });
  },
}));
