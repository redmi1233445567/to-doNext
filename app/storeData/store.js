import { create } from 'zustand'
import { persist } from 'zustand/middleware'



export const useDoStore = create(persist((set) => ({
  do: [],
  addDo: (item) => set((state) => ({ do: [...state.do, item] })),
  removeAllDos: () => set((state) => {
    let all = state.do;
    for (let i = 0; i < all.length; i++) {
        all[i].delete = true;
    }
    return ({do: all})
  }) ,
  removeAllDosEver: () => set({ do: [] }),
  clearOnee: (item) => set((state) => {
    console.log(item)
    let all = state.do;
    for (let i = 0; i < all.length; i++) {
        if (all[i].id == item) {
            all[i].delete = true;
            i = 100;
        }
    }
    return ({do: all})
  }),
  addDone: (item) => set((state) => {
    let all2 = state.do;
    for (let i = 0; i < all2.length; i++) {
        if (all2[i].id == item) {
            all2[i].done = !all2[i].done;
            i = 100;
        }
    }
    return ({do: all2})
  }),
  deletePermanently: (item) => set((state) => {
    let all2 = state.do;
    let test = [];
    for (let i = 0; i < all2.length; i++) {
        if (all2[i].id !== item) {
            test = [...test, all2[i]]
        }
    }
    return ({do: test})
  }),
  deleteAll: () => set((state) => {
    let all2 = state.do;
    let test = [];
    for (let i = 0; i < all2.length; i++) {
        if (all2[i].delete === false) {
            test = [...test, all2[i]]
        }
    }
    return ({do: test})
  }),
}), {
    name: "dos"
}))