import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import TextField from '@mui/material/TextField';


export default function Products({ data }) {
  const [rows, setRows] = React.useState([]);
  const [datas, setDatas] = React.useState(data);

  React.useEffect(() => {
    (async () => {
      console.log('data', data);
      // const products = await getProducts();
      setRows(data.products);
    })();
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
          <div>
            {
              params.row.images.map((image, index) => <img key={`${params.row.id}-${index}`} style={{ width: '80px', margin: '5px' }} src={image} alt='' />)
            }
          </div>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,sortable: false,
      renderCell: (params)=>{
        return (
          <div>
            <Button variant="outlined" color="error" onClick={(e) => handleButton(e, params)} sx={{margin: '5px'}}>Delete</Button>
          </div>
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
      let newUrl = 'http://localhost:3000/products';
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
      <div className="container-fluid">
        <TextField id="standard-basic" onKeyPress={handleKeyPress} label="Search..." variant="standard" />
        <br /><br />
        <div style={{ height: 800, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            rowHeight={130}
          />
        </div>
      </div>
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

export async function getServerSideProps({ query }) {
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
