import Link from 'next/link'
// const protocal = process?.env.NODE_ENV === "development" ? "http://" : "https://"
async function getData() {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{cache:"no-store"})
    const data = await res.json();
     return data 
   
}


export default async function Home() {
const data=await getData()

  console.log("console",data)
  return (
    <div>
      <div> Hello from</div>
        <div>
            {
             data.map((item:any,index:any)=>{
                    return (
                        <div key={index}>
                            <div key={item.id}>
                                {item.title}
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
