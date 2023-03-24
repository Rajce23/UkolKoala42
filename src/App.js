import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneSetOfData from './Components/OneSetOfData';
import uuid from 'react-uuid';
import DataContext from './DataContext';
function App() {

function getId()
{
  let id = uuid()
  return id
}

  const [Data,setData] = useState()
  useEffect(()=>{
    axios.get((" http://localhost:3000/data")).then((res)=>{
      let arr =[]
      let users = []

      res.data.map((data)=>{
        if(arr.includes(data.data["ID"]) === false)
        {
          arr.push(data.data["ID"])
          users.push(data)
        }
      })

  
      setData(users)
    })
  },[])
  return (
    <DataContext.Provider value={{Data,setData}}>
    <div className="w-screen h-screen overflow-auto  bg-black">
      <div className='w-full text-white font-bold h-16 px-10 bg-green-500  flex items-center  '>
          <p className='w-1/12 text-center '></p>
          <p className='w-1/12 text-center '>ID</p>
          <p className='w-1/12 text-center'>Name</p>
          <p className='w-1/12 text-center'>Gender</p>
          <p className='w-1/12 text-center'>Ability</p>
          <p className='w-1/12 text-center'>Minimal distance</p>
          <p className='w-1/12 text-center'>Weight</p>
          <p className='w-1/12 text-center'>Born</p>
          <p className='w-1/12 text-center'>in space since</p>
          <p className='w-1/12 text-center'>Beer consuption</p>
          <p className='w-1/12 text-center'>Know the answer ? </p>
          <p className='w-1/12 text-center'>Delete</p>
      </div>
      {
        Data?.map((data)=>{
          return <OneSetOfData key={getId()} data={data} />
        })
      }


    </div>
    </DataContext.Provider>
  );
}

export default App;
