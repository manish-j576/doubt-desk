'use client';

import useCounterStore from "@/store/useStore";

export default function Test(){
  const count = useCounterStore((state)=>state.count)
  const increase = useCounterStore ((state)=>state.increase)
  const decrease = useCounterStore((state)=>state.decrease)
  return <div>
    <h1>count  : {count } </h1>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
}