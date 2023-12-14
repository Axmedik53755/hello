import { NextResponse } from "next/server"



export const GET = () => {
    console.log("hello")
    return NextResponse.json({ msg: "Salam 1 ci sehifeden backend-den", success: true })
}