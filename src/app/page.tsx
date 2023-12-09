import Image from 'next/image'
import Link from 'next/link'


async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <div> Hello from</div>
      {/* <div> {data}</div> */}
      <div>
        {data?.map((item: any) => <div key={item.id}>{item.title}</div>)}
      </div>
      {/* <Link className='bg-red-600' href='/ikinci'>Ikinsi sehifeye get</Link> */}
    </div >
  )
}
