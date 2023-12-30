
import Link from 'next/link'

// const protocal = process?.env.NODE_ENV === "development" ? "http://" : "https://"
async function getData() {
  const res = await fetch(`${process.env.BASE_API_URL}api/allData`)
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log("console",data)
  return (
    <div>
      <div> Hello from</div>
        <div>
            {
                data?.success?.length&&    data?.success?.map((item:any,index:any)=>{
                    return (
                        <div key={index}>
                            <div key={item.id}>
                                {item.name}
                            </div>
                        </div>
                    )
                })
            }

        </div>
      <Link href={'/ikinci'}>
        ikinci sehifeye get
      </Link>
    </div >
  )
}
