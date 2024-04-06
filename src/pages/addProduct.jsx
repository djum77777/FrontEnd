import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link} from 'react-router-dom'
import axios from 'axios'
import { useGet } from '../hook/usefetch'

function AddProduct() {
  const [form,setform]=useState({
    name:"",
    price:0,
    stock:0,
    store_id:0
  })
  const handleclick=(event)=>{
    //set isi form kedalam state
    setform({
      //destructing isi form
      ...form,
      [event.target.name]:event.target.value 
      //untuk setiap isi dlm form diisi sesuai value yg ada dan di masukkan dlm state setForm
    })
  }

  const handlesubmit=async(event)=>{
    event.preventDefault(); //begitu submit, untuk mencegah lngsung di refresh
    try {
      console.log(form); //untuk cek data yg mau di post sudah bnr gk
      //routingnya harus sama dgn routing di file asal yaitu mvc ejs
      const response=await axios.post('http://localhost:8000/add-product',form);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  //manggil ini untuk keluarin isi nama toko di form label store
  const [data,isLoading]=useGet('http://localhost:8000/store')
  //console.log(data);
  return (
    <Layout title="Add Product">
      <Link to="/product">back</Link>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor=''>Name : </label>
        <input type='text' name="name" value={form.name} onChange={handleclick}/>
        </div>
        <div>
          <label htmlFor=''>Price : </label>
          <input type='number' name="price" value={form.price} onChange={handleclick}  />
        </div>
        <div>
          <label htmlFor=''>Stock : </label>
          <input type='number' name="stock" value={form.stock} onChange={handleclick}  />
        </div>
        <div>
          <label htmlFor=''>Store: </label>
          <select name="store_id" value = {form.store_id} onChange={handleclick}>
          <option>Pilih</option>
          {
            isLoading ? 'Loading . . . ' : data?.length === 0 ? 'Data Kosong' :
            data&&data.map((item)=>
          { 
            return (
            <option value={item.id} key={item.id}>{item.name}</option>
            )
          })}
          </select>        
        </div>
        {/* kl tidak mau buat onSubmit={handleSubmit} di form, kt jg bs trigger dgn onCLick={handleSubmit} di button */}
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default AddProduct