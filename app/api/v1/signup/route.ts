import { prisma } from "@/lib/db";
import Credentials from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try{

        console.log("backend hitted signup")
        const data = await req.json()
        console.log(data)
        if(!data){
            return NextResponse.json({})
        }
        const response = await prisma.user.create({
            data:{

                Fname : data.username ?? "",
                username : data.username ?? "",
                password : data.password ?? "",
                provider : "Credentials"
            }

        })
        // data entry done in database
        return NextResponse.json({
            messege :"user logged in"
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({})
    }
}


