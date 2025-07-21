import { prisma } from "@/lib/db";
import Credentials from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    try{

        console.log("backend hitted login")
        const data = await req.json()
        console.log(data)
        if(!data){
            return NextResponse.json({})
        }
        const user = await prisma.user.findFirst({
            where:{
                username:data.username
            }

        })
        if(!user){
            console.log("no user found")
            return NextResponse.json({
                messege : "User not found",
                success : false
            })
        }
        if(user.password != data.password){
            console.log("Incorrect password")
            return NextResponse.json({
                messege : "Incorrect Password",
                success : false
            })
        }
        // data entry done in database
        return NextResponse.json({
            messege :"user logged in",
            success : true
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({})
    }
}


