import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductList from '../components/ProductList';
import Head from 'next/head';

export default function Page({data}) {
  const [key, setKey] = useState('all');
  return (
    <>
      <Head>
        <title>Danh sách sản phẩm</title>
      </Head>
      <br /> <br />
      <a href="#footer">Link to footer</a>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="all" title="ALL">
          { key === 'all' && <ProductList brandKey=""/>}
        </Tab>
        <Tab eventKey="iphone" title="Iphone">
          { key === 'iphone' && <ProductList brandKey="iphone"/>}
        </Tab>
        <Tab eventKey="samsung" title="Samsung">
          { key === 'samsung' && <ProductList brandKey="samsung"/>}
        </Tab>
      </Tabs>
    </>
  )
}