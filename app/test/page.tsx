'use client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counter } from '../recoil/atom';
import RecoilProvider from '../RecoilProvider';

function Output(){
    const val = useRecoilValue(counter)
    return <div>
        <h1>hi tehre</h1>
        value : {val}
    </div>
}

export default function Test() {
  return (<RecoilProvider>
      <Output />
</RecoilProvider>
  );
}