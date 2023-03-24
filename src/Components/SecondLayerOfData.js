import React, { useContext, useEffect } from 'react'
import DataContext from '../DataContext'

function SecondLayerOfData({showSecond,data}) {

    const {Data} = useContext(DataContext)
    const {setData} = useContext(DataContext)
  return (
    <div className={showSecond? 'my-2  w-3/5 h-32 ':"hidden"}>
        <div className='w-full h-16 flex bg-red-600'>
            <div className='w-1/4 h-full flex items-center justify-center'>ID</div>          
            <div className='w-1/4 h-full flex items-center justify-center'>Nemsis Id</div>        
            <div className='w-1/4 h-full flex items-center justify-center'>Secret Code</div>         
            <div className='w-1/4 h-full flex items-center justify-center'>Delete</div>
        </div>
        <div className='w-full h-16 flex bg-yellow-500'>
            <div className='w-1/4 flex items-center justify-center h-full'>{data.data["ID"]}</div>          
            <div className='w-1/4 flex items-center justify-center h-full'>{data.data["Nemesis ID"]}</div>        
            <div className='w-1/4 flex items-center justify-center h-full'>{data.data["Secrete Code"]}</div>         
            <div className='w-1/4 flex items-center justify-center h-full text-red-600 cursor-pointer font-semibold'onClick={()=>{
                let newData = []
            
                Data.map((user)=>{
                    let newChilrden ={
                        has_nemesis:{
                            records:[]
                        }
                    }

                    user.children.has_nemesis?.records.map((record)=>{
                    let Record ={
                        data:record.data,
                        children:{has_secrete:{
                            records:[]
                        }}
                    }

                    record.children.has_secrete?.records.map((secret)=>{
                        if(secret.data["ID"] !== data.data["ID"])
                        {
                            Record.children.has_secrete.records.push(secret)
                        }


                    })

                    newChilrden.has_nemesis.records.push(Record)
                   })
                 newData.push({data:user.data,children:newChilrden})


                })
              setData(newData)
            }} >X</div>
        </div>

    </div>
  )
}

export default SecondLayerOfData