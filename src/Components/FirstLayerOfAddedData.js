import React, { useContext, useEffect,useState } from 'react'
import DataContext from '../DataContext'
import SecondLayerOfData from './SecondLayerOfData'
import { useCallback } from 'react';
import uuid from 'react-uuid';

function FirstLayerOfAddedData({showFirst,data}) {

    const [showSecond,steShowSecond] = useState(false)
    const {Data} = useContext(DataContext)
    const {setData} = useContext(DataContext)
    useEffect(()=>{
        steShowSecond(false)
    },[showFirst])

  return (
    <div   tyle={showSecond ? {marginBottom:"80px",height:`${data.children.has_secrete?.records*140}px`}: {height:"128px"} }   className={showFirst ? " w-4/6 my-1 text-white  " : "hidden"}>
     <div className='w-full h-16 flex items-center  bg-blue-500 text-white'>
        <p className=' hover:scale-105 duration-200 cursor-pointer w-1/12 text-center ' ></p>
            <p className='w-1/5 text-center'>ID</p>
            <p className='w-1/5 text-center'>Character ID</p>
            <p className='w-1/5 text-center'>Is alive ?</p>
            <p className='w-1/5 text-center'>Years</p>
            <p className='w-1/5 text-center hover:scale-110 duration-200  cursor-pointer'  >Delete</p>
        </div>

        <div className='w-full h-16 flex items-center  bg-green-700 text-white'>
      {  data.children.has_secrete?.records.length > 0 ?<p className=' hover:scale-105 duration-200 cursor-pointer w-1/12 text-center  ' onClick={()=>{
            if(showSecond === false)
            {
                steShowSecond(true)
            }
            else
            {
                steShowSecond(false)
            }
        }} >{ showSecond?"Show less":"Show more"}</p>: <p className='w-1/12'></p>}
            <p className='w-1/5 text-center'>{data.data["ID"]}</p>
            <p className='w-1/5 text-center'>{data.data["Character ID"]}</p>
            <p className='w-1/5 text-center'>{data.data["Is alive?"]}</p>
            <p className='w-1/5 text-center'>{data.data.Years}</p>
            <p className='w-1/5 text-center hover:scale-110 duration-200 text-red-600 cursor-pointer' onClick={()=>{
                let newData =[]
                Data.map((Data)=>{
                    let newChilrden = {has_nemesis:{
                        records:[]
                    }}

                   Data.children.has_nemesis?.records.map((record)=>{
                    if(record.data["ID"] !== data.data["ID"])
                    {
                        newChilrden.has_nemesis.records.push(record)
                    }
                   })
                 
                   newData.push({data:Data.data,children:newChilrden})

                })
                setData(newData)
            }}>X</p>
        </div>
        {data.children.has_secrete?.records&& data.children.has_secrete?.records.map((data)=>{
            return <SecondLayerOfData key={data.data["ID"]}  showSecond={showSecond} data={data}/>
        })}
    </div>
  )
}

export default FirstLayerOfAddedData