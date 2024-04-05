import React,{ useEffect, useState } from "react";
import ComLabel from '../components/atoms/ComLabel';
import ComButton from '../components/atoms/ComButton';
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Home()
{
    const[counter,setCounter]=useState(0);
    const[data,setData]=useState([]);
    const [isLogin, setIsLogin] = useState(false)

    //call API
    const getData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const resData = await response.json();
        console.log(resData);
        setData(resData)
    }

    function kurang() {
        setCounter(counter - 1)
    }
    function tambah(){
        setCounter(counter+1)
    }
    function handleClick(){
        alert('Oke')
    }
    function handleClick2(){
        alert('Oke 2')
    }
    useEffect(()=>{
        //useEffect biar tidak terjadi looping terus saat ada perubahan dr fungsi lain,
        //tidak mengganggu fungsi yg sudah di load dan dideklarasi di useEffect shg loading data tdk berat
     getData();
    },[])

    return(
        <Layout title='Home'>  
            {/*<Navbar title = 'Home' isLogin={isLogin} handleLogin={() => setIsLogin(true)} handleLogout={() => setIsLogin(false)}  />*/}
            {/* contoh pake LINK */}
            <Link to='/contact'>ke contact</Link>
            <h2>{counter}</h2>
            <button onClick={kurang}> kurang </button>
            <button onClick={tambah}> tambah </button>
              <button onClick={() => setCounter(0)}>Reset</button>
              <div>
                  <ComLabel label='Name' type='text' placeholder='Masukan Nama' />
                  <ComButton title='Simpan' handleClick = {handleClick}  />
              </div>
              <div>
                  <ComLabel label='Phone' type='date' />
                  <ComButton title='Edit' handleClick = {handleClick2} />
              </div>
              <h3>User Details</h3>
              {data.map((item)=>{
                  return(
                  <div key={item.id}>
                     <Link to={`/user-detail/${item.id}`}>
                      <p>Name : {item.name}</p>
                      <p>Address : {item.address.city}</p>
                      <hr/>
                    </Link>
                  </div>
                  )
                  })
      
              }
        </Layout>  
    )
}
export default Home;