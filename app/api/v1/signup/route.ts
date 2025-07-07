import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    console.log("backend hitted signup")
    const data = await req.json()
    console.log(data)

    return NextResponse.json({
        "messge":"user logged in"
    })
}


