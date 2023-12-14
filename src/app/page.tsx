import Image from 'next/image'
import Link from 'next/link'


async function getData() {
  const res = await fetch(`${process.env.BASE_API_URL}api/star`)
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log("hiii")
  return (
    <div>
      <div> Hello from</div>
      <div> {data}</div>
    </div >
  )
}
