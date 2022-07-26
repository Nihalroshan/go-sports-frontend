import Head from "next/head"
import MainLayout from "../components/layouts/mainLayout"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Go Sports</title>
      </Head>
      <MainLayout />
    </div>
  )
}
