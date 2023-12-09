import Link from 'next/link'

async function getData() {
    const res = await fetch(`${process.env.BASE_API_URL}/api/second`)
    return res.json()
}
const Hello = async () => {

    const data = await getData()
    console.log(data)
    return (<div>
        <div>Ikinci sehifedesen</div>
        <div>{data}</div>
        <Link href='/'>Geri don</Link>
    </div>)
}

export default Hello