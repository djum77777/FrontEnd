import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function UserDetail() {
  const {userid}=useParams();
  const[data,setData]=useState([]);
  //call API
  const getData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const resData = await response.json();
    console.log(resData);
    setData(resData)
  }
  console.log(data);
  //berjalan hanya 1x pada saat halaman di load
  useEffect(()=>
  {
    //useEffect biar tidak terjadi looping terus saat ada perubahan dr fungsi lain,
    //tidak mengganggu fungsi yg sudah di load dan dideklarasi di useEffect shg loading data tdk berat
    getData();
  },[])
  
  const [hit,setHit]=useState(0);
  function hitung(){
    setHit(hit+1)
  };
  
  //berjalan ketika ada perubahan di hit
  useEffect(()=>
  {
    //useEffect ini untuk mendeteksi apakah ada perubahan di hit, bila ada maka di menjalankan console log
    //menampilkan tulisan tombol hitung di pencet. jd useeffect bs kt pake untuk mendeteksi apkh terjadi perubahan
    console.log('tombol hitung dipencet');
  },[hit])
  
  const handleResize = () => {
    console.log('window di resize');
  }
  //berjalan terus ketika window di resize tetapi akan menghapus looping resize dan hnya jlnkan 1x looping
  useEffect(() => {
    console.log('jalan willunmount');
    window.addEventListener(('resize'), handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
    
}, [])

  return (
    <Layout>
      <p>{hit}</p>
      <button onClick={hitung}>tambah</button>
      <h3>Detail User {userid}</h3>
      <div key={data.id}>
        <p>Name : {data.name}</p>
        <p>Email : {data.email}</p>
        <p>User Name : {data.username}</p>
        {/* ? => to render data  */}
        <p>Address : {data.address?.city}</p>
      </div>
      
      <Link to='/' >Back</Link>
    </Layout>
    
  )
}

export default UserDetail
