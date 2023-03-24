import React, { useContext, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import DataContext from '../DataContext'
import FirstLayerOfAddedData from './FirstLayerOfAddedData'

function OneSetOfData({data}) {

    const [showFirst,steShowFirst] = useState(false)
    const {Data} = useContext(DataContext)
    const {setData} = useContext(DataContext)

  return (
    <div   className= 'w-full text-white font-bold  my-10 px-10'>
        <div className='w-full h-16  flex items-center  bg-green-500   '>
               { data.children.has_nemesis?.records.length > 0 ? <p className=' hover:scale-105 duration-200 cursor-pointer w-1/12 text-center ' onClick={()=>{
                steShowFirst(!showFirst)}}>{ showFirst?"Show less":"Show more"}</p> : <p className='w-1/12'></p>  }
            <p className='w-1/12 text-center'>{data.data["ID"]}</p>
            <p className='w-1/12 text-center'>{data.data.Name}</p>
            <p className='w-1/12 text-center'>{data.data.Gender}</p>
            <p className='w-1/12 text-center'>{data.data.Ability}</p>
            <p className='w-1/12 text-center'>{data.data["Minimal distance"]}</p>
            <p className='w-1/12 text-center'>{data.data.Weight}</p>
            <p className='w-1/12 text-center'>{data.data.Born}</p>
            <p className='w-1/12 text-center'>{data.data["In space since"]}</p>
            <p className='w-1/12 text-center'> {data.data["Beer consumption (l/y)"]}</p>
            <p className='w-1/12 text-center'>{data.data["Knows the answer?"] }</p>
            <p className='w-1/12 text-center hover:scale-110 duration-200 text-red-600 cursor-pointer' onClick={(e)=>{
                Data.map((dataSet)=>{
                    if(dataSet.data["ID"] === data.data["ID"] )
                    {
                       let arr= []
                       Data.map((user)=>{
                        if(user.data["ID"] !== data.data["ID"])
                        {
                            arr.push(user)
                        }
                       })
                       setData(arr)
                    }
                })    
            }} >X</p>
        </div>

    { data.children.has_nemesis?.records&& data.children.has_nemesis?.records.map((record)=>{
                return <FirstLayerOfAddedData key={record.data["ID"]}   data={record} showFirst={showFirst}/> 
    }) }
</div>
  )
}

export default OneSetOfData