import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {

  return (
    <>
      <div className='flex flex-col'>
        <div>Villa Adı:{data.title}</div>
        <div>Villa Url:{data.url}</div>
      </div>
    </>
  )
}



// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://api.villavillam.com.tr/details?url=villa-atlas`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
