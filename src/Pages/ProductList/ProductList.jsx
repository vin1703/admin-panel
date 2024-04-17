import React,{useEffect} from 'react'
import './productList.css'
import { productRows } from '../../data';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { getProduct } from '../../redux/apiCalls';
import {useDispatch,useSelector} from 'react-redux';

function ProductList() {
    const products = useSelector(state=>state.product.products);
    const dispatch = useDispatch();
    useEffect(()=>{
      getProduct(dispatch);
    })
  
    const columns = [
      { field: "_id", headerName: "ID", width: 220 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          );
        },
      },
      { field: "inStock", headerName: "Stock", width: 200 },

      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
             
                <button className="productListEdit">Edit</button>
             
              <DeleteOutlineIcon
                className="productListDelete"
              />
            </>
          );
        },
      },
    ];
  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId = {(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList
