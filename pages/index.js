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
        <title>IMG-UP</title>
      </Head>
      <br /> 
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tab--custom"
      >
        <Tab eventKey="all" title="すべて 234">
          { key === 'all' && <ProductList brandKey=""/>}
        </Tab>
        <Tab eventKey="iphone" title="画像設定3枚 123">
          { key === 'iphone' && <ProductList brandKey="iphone"/>}
        </Tab>
        <Tab eventKey="samsung" title="セール商品用5枚 567">
          { key === 'samsung' && <ProductList brandKey="samsung"/>}
        </Tab>
        <Tab eventKey="samsung1" title="通常4枚 533">
          { key === 'samsung2' && <ProductList brandKey="samsung"/>}
        </Tab>
        <Tab eventKey="samsung2" title="画像設定の作成 +">
          { key === 'samsung3' && <ProductList brandKey="samsung"/>}
        </Tab>
      </Tabs>
    </>
  )
}