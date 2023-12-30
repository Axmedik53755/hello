// import executeQuery from "../db/db";
// import { NextResponse } from "next/server";
//
// export const GET = async (req: Request, res: Response) => {
//   try {
//     const allData = await executeQuery({
//       query: `SELECT all_products.*,category.slug ,city.name AS cityName FROM all_products
//        INNER JOIN category ON
//        all_products.categoryId = category.id
//        INNER JOIN city ON all_products.cityId = city.id
//        ORDER BY all_products.createdAt DESC`,
//       values: [],
//     });
//
//     return NextResponse.json({success:allData });
//   } catch (error) {
//     return NextResponse.json({err:"xeta bas verdi"});
//   }
// };
//
import  executeQuery  from "../db/db";
import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response) => {
  try {
    const allData = await executeQuery({
      query: `SELECT all_products.*,category.slug ,city.name AS cityName FROM all_products
       INNER JOIN category ON
       all_products.categoryId = category.id
       INNER JOIN city ON all_products.cityId = city.id
       ORDER BY all_products.createdAt DESC`,
      values: [],
    });

    return NextResponse.json({ success: allData });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ err: "Veritabanı hatası", error }); // Hata bilgisi ekleyin
  }
};