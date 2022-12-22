import * as React from 'react';

export default function ProductDetail({ data }) {

  const [product, setProduct] = React.useState(data);

  return (
    <>
      <h1>{product.title}</h1>
      {
        product.images.map((image) => <img src={image} />)
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
