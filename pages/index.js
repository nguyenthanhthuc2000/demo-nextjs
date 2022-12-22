import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function Page({data}) {
  // const [rows, setRows] = React.useState([]);

  // React.useEffect(() => {
  //   (async () => {
  //     console.log(data);
  //     const products = await getProducts();
  //     setRows(products.products);
  //   })();
  // }, []);

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'title', headerName: 'Title', width: 300 },
  //   { field: 'price', headerName: 'Price', type: 'number', width: 100 },
  //   {
  //     field: 'discountPercentage',
  //     headerName: 'Discount Percentage',
  //     type: 'number',
  //     width: 200,
  //   },
  //   {
  //     field: 'brand',
  //     headerName: 'Brand',
  //     width: 200,
  //   },
  //   {
  //     field: 'category',
  //     headerName: 'Category',
  //     width: 200,
  //   },
  //   {
  //     field: 'images',
  //     headerName: 'Image',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 330,
  //     renderCell: (params)=>{
  //       return (
  //         <div>
  //           {
  //             params.row.images.map((image, index) => <img key={`${params.row.id}-${index}`} style={{ width: '80px', margin: '5px' }} src={image} alt='' />)
  //           }
  //         </div>
  //       )
  //     }
  //   },
  //   {
  //     field: 'actione',
  //     headerName: 'Action',
  //     width: 200,sortable: false,
  //     width: 150,
  //     renderCell: (params)=>{
  //       return (
  //         <div>
  //           <Button variant="contained" color="warning" onClick={(e) => handleButton(e, params)} sx={{margin: '5px'}}>Edit</Button> <br />
  //           <Button variant="outlined" color="error" onClick={(e) => handleButton(e, params)} sx={{margin: '5px'}}>Delete</Button>
  //         </div>
  //       )
  //     }
  //   },
  // ];

  // const handleButton = ( e, params) => {
  //   console.log(params);
  // }
  
  return (
    <>
      <div className="container-fluid">
        <div style={{ height: 800, width: '100%' }}>
          {/* <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            rowHeight={130}
          /> */}
        </div>
      </div>
    </>
  )
}

// async function getProducts() {
//   const res = await fetch('https://dummyjson.com/products');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
// export async function getStaticProps() {
//   const res = await fetch('https://dummyjson.com/products');
//   const resJson = await res.json();
//   const products = resJson.products;
//   return {
//     props: {
//       products,
//     },
//   }
// }

// export async function getServerSideProps() {
//   const res = await fetch('https://dummyjson.com/products');
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   }
// }
