import { NextResponse } from "next/server"



export const GET = () => {
    return NextResponse.json({  success: true,msg: "Salam 2ci Backendden sehifeden" })
}