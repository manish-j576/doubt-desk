"use client"
import { RecoilRoot } from "recoil";

export default function RecoilProvider({childrens}:any){
    return <RecoilRoot>
        {childrens}
    </RecoilRoot>
}