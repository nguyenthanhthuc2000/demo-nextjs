import * as React from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
      <br /> <br />
      Route:{ JSON.stringify(router.query)}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.images[0]} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Mua ngay</Button>
      </Card.Body>
    </Card>
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
