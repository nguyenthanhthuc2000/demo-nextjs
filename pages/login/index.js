import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Image from 'next/image';


export default function Login({ data }) {
  const [rows, setRows] = React.useState(data.products || []);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { 
      field: 'title', 
      headerName: 'Title', 
      width: 300,
      renderCell: (params)=>{
        return (
          <>
            <Link href={`/products/${params.row.id}`}>
              {params.row.title}
            </Link>
          </>
        )
      }
    },
    { field: 'price', headerName: 'Price', type: 'number', width: 100 },
    {
      field: 'discountPercentage',
      headerName: 'Discount Percentage',
      type: 'number',
      width: 200,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 200,
    },
    {
      field: 'images',
      headerName: 'Image',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 330,
      renderCell: (params)=>{
        return (
          <>
            {
              params.row.images.map((img, index) => 
                <Image 
                  key={`${params.row.id}-${index}`} 
                  style={{ margin: '5px' }} 
                  src={img} 
                  alt='' 
                  width='100'
                  height='100'
                  priority
                />
              )
            }
          </>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,sortable: false,
      renderCell: (params)=>{
        return (
          <Button variant="outlined" color="error" onClick={(e) => handleButton(e, params)} sx={{margin: '5px'}}>Delete</Button>
        )
      }
    },
  ];

  const handleButton = ( e, params) => {
    console.log(params);
  }
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      let params = {};
      if (e.target.value) {
        params = {
          q: e.target.value
        };
      }
      handleSearch(params);
    }
  }

  const handleSearch = async (params) => {
    try {
      let qs = '';
      let query = '';
      let newUrl = window.location.protocol +"//" + window.location.host + window.location.pathname;
      if (typeof params === 'object' && Object.keys(params).length > 0) {
        qs = new URLSearchParams(params).toString();
        newUrl = newUrl + '?' + qs;
        query = '/search?' + qs;
      }
      window.history.pushState({ path: newUrl },'', newUrl);
      const res = await fetch(`https://dummyjson.com/products${query}`);
      const data = await res.json();
      setRows(data.products);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <>
      <br />
      <TextField id="standard-basic" onKeyPress={handleKeyPress} label="Search..." variant="standard" />
      <br />
      <br />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        rowHeight={130}
        autoHeight={true}
      />
    </>
  )
}

// async function getStaticProps() {
//   const res = await fetch('https://dummyjson.com/products/search?q=Laptop');
//   const resJson = await res.json();
//   const data = resJson.products;
//   return {
//     props: {
//       data,
//     },
//   }
// }

export async function getStaticProps({ query }) {
  let queryStr = "";
  if (typeof query === 'object' && Object.keys(query).length > 0) {
    queryStr = '/search?' + new URLSearchParams(query).toString();
  }
  const res = await fetch(`https://dummyjson.com/products${queryStr}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}
