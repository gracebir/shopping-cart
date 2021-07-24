import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Product from '../components/Product';
import { GetServerSideProps } from 'next';


export default function Home(props:any) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>ShopRITE</title>
      </Head>
      <Header/>
      <main className='max-w-screen-2xl mx-auto'>
        <Banner/>
        <Product products={props.products}/>
      </main>
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async (context) =>{
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json());
  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}