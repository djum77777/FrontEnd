import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Layout from '../components/Layout'

export function GetAxios(){
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const getData=async()=>{
    setIsLoading(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setData(response.data)
    setIsLoading(false)
  }
  useEffect(()=>
  {
    getData()
  },[])
  return(
    <Layout title='Data'>
      <div>
        {
          isLoading?'loading....':data.length===0?'data kosong':
          data.map((item)=>
          {
            return(
              <div key={item.id}>
                <p>Name : {item.id}</p>
                <p>Address : {item.address.city}</p>
                <hr/>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}