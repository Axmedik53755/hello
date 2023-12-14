import { NextResponse } from "next/server"



export const GET = () => {
    return NextResponse.json({ msg: "Salam 2ci Backendden sehifeden", success: true })
}