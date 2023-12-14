import Image from 'next/image'
import Link from 'next/link'

// const protocal = process?.env.NODE_ENV === "development" ? "http://" : "https://"
async function getData() {
  const res = await fetch(`${process.env.BASE_API_URL}api/star`, { cache: "no-store" })
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log("hiii")
  return (
    <div>
      <div> Hello from</div>
      <div> {data.msg}</div>
      <Link href={'/ikinci'}>
        ikinci sehifeye get
      </Link>
    </div >
  )
}
