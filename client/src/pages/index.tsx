import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>ShopRITE</title>
      </Head>
      <Header/>
    </div>
  )
}
