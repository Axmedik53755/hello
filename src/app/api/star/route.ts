import { NextResponse } from "next/server"



export const GET = () => {
    console.log("hello")
    return NextResponse.json("Salam 1 ci sehifeden backend-den")
}