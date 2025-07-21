import { prisma } from "@/lib/db";
import { NextRequest, NextResponse, userAgent } from "next/server";

export  async function POST(req:NextRequest){
    try{
        const data = await req.json()
        const username = data?.username
        if(!username){
            return NextResponse.json({
                messege : "Invalid username"
            })
        }
        const user = await prisma.user.findFirst({
            where : {
                username
            }
        })
        if(user){
            return NextResponse.json({
                messege : "Username already exist"
            })
        }
        return NextResponse.json({
            
        });
    }catch(e){
        console.log(e)
        return NextResponse.json({
            message : "error occured"
        })
    }
    
}


