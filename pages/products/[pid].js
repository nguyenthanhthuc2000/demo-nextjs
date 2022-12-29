import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ProductDetail({ data }) {
  const router = useRouter();
  const [product, setProduct] = React.useState(data);

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="viewport" content={product.description}></meta>
      </Head>
      {
        JSON.stringify(router.query)
      }
      <h1>{product.title}</h1>
      {
        product.images.map((image) => <img key={image} src={image} />)
      }
    </>
  );
}

export async function getServerSideProps({ query }) {
  const id =  query.pid;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}
