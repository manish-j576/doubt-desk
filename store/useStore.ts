import {create} from "zustand"

const useCounterStore = create((set)=>({
    count : 52,
    increase: () => set((state : any) => ({ count: state.count + 1 })),
    decrease : () => set((state : any) => ({count : state.count - 1}))
}))

export default useCounterStore