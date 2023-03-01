import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function ProductList({ brandKey }) {
  const [brand, setBrand] = React.useState(brandKey);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    console.log()
    handleSearch({q: brandKey});
  }, []);

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
      if (typeof params === 'object' && Object.keys(params).length > 0) {
        qs = new URLSearchParams(params).toString();
        query = '/search?' + qs;
      }
      const res = await fetch(`https://dummyjson.com/products${query}`);
      const data = await res.json();
      setRows(data.products);
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <>
      {/* <TextField id="standard-basic" onKeyPress={handleKeyPress} label="Search..." variant="standard" /> */}
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            rowHeight={130}
            autoHeight={true}
          />
        </div>
      </div>
    </>
  )
}