// 'use client'
import React, { useEffect, useState } from 'react';
const protocal = process?.env.NODE_ENV === "development" ? "http://" : "https://"
async function getData() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/allData`,{cache:"no-store"});
  return await res.json();
}

export default async function Home() {
  const data = await getData();
//   const [data, setData] = useState<any>([]);
// useEffect(()=>{
//   const fetchData = async () => {
//       const response = await fetch(`/api/allData`)
//       const result = await response.json();

//       setData(result);
//   }
//   fetchData()
// },[])


  return (
    <div>
      <div> Hello from</div>
      <div>
        {
         data?.data?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <div key={item.id}>{item.cityName}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
