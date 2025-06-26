"use client"
import { atom } from "recoil";  
export const counter = atom({
    key : "counterVal",
    default : 0
})