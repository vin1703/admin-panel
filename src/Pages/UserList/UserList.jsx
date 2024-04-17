import React, { useState,useEffect } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { userRequest } from '../../requestMethods';

const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'username',headerName: 'User',width: 200,renderCell:(params)=>{
        return (
            <div className='userListUser'>
                {params.row.username}
            </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 115,
      renderCell:(params)=>{
        return (
            <>
            <button className="userListEdit">Edit</button>
            <DeleteOutlineIcon className='userListDelete'/>
            </>
            
            
        )
      }
    },
  ];
  
function UserList() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async()=>{
      try {
        const res = await userRequest.get('/user');
        setUsers(res.data);
      }catch{}
    }
    getUsers();
  })
  return (
    <div className="userList">
        <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        getRowId = {(row)=>row._id}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>

  )
}

export default UserList
