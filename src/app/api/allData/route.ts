import  executeQuery  from "../db/db";
import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response) => {
  try {
    const allData = await executeQuery({
      query: `SELECT * from all_products`,
      values: [],
    });
   return NextResponse.json({ success: true,data:allData });
  } catch (error) {
    return NextResponse.json({ err: true, error }); // Hata bilgisi ekleyin
  }
};