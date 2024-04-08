import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { useGet } from '../hook/usefetch'


function EditProduct() {
	//useState untuk nampung isi form sesuai nama di table product
  const [form, setForm] = useState({
      name: '',
      price: 0,
      store_id: 0,
  })

  //fungsi react useParams() untuk ambil id yg ada di path dan ditampung di const ID
  const ID = useParams().id
	// atau bs jg pake destructuring dr id yg dilempar path
	//const {id}=useParam()
  
	const navigate = useNavigate()
  
	const handleChange = (e) => {
		//setForm untuk melakukan memasukan isi form sesuai dgn <input> tag di html dibawah
      setForm({
         ...form,
         [e.target.name]: e.target.value ,
				 //atau ini sm artinya dgn
				 
      })
  }

  const handleSubmit=async(event)=>{
    event.preventDefault(); //begitu submit, untuk mencegah lngsung di refresh
    try {
      // post ke api
      const response = await axios.patch(`http://localhost:8000/editProduct/${ID}`, form)
      console.log(response); 
      alert('edit produk berhasil');
      //stlh edit produk berhasil maka halaman langsung dibalikin ke hlm product
      navigate('/product')

  } catch (error) {
      console.log(error);
      alert('edit data gagal')
  }
}
  //manggil ini untuk keluarin isi nama toko di form label store
  const [store] = useGet('http://localhost:8000/store') 

  //untuk ambil product berdasarkan ID yg mau diedit
  const [product] = useGet(`http://localhost:8000/productdetail/${ID}`)
  
  useEffect(() => {
    setForm(!product ? form : product)
    
}, [product])

return (
  <Layout title='Edit Produk'>
      <Link to='/product'>Back</Link>

      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="">Nama</label>
              <input type="text" value={form.name} name='name' onChange={handleChange}/>
          </div>
          <div>
              <label htmlFor="">Harga</label>
              <input type="number" name='price' value={form.price} onChange={handleChange} />
          </div>
          <div>
              <label htmlFor="">Store</label>
							{/* disini kt tampung store_id untuk kt pakai sbgai pembanding diwktu mapping dibawah */}
              <select name="store_id" value={form.store_id} onChange={handleChange}>
                  <option value="">Pilih</option>
                  {store&&store.map((item) => (    
										  //defaultValue ini untuk focus pada value tertntu yg ditentukan, case ini brrti kt fokus pada value dari
											//item.id ===product.store_id krn product.store_id itu kt dptin dr product yg mau kt edit dan kt cari store_id
											//nya dibandingkan sm store.id untuk kluarin dan fokus ke nama toko sesuai store_id==store.id  
                      <option value={item.id} key={item.id} defaultValue={item.id === product?.store_id}>{item.name}</option>
                  ))}
              </select>
          </div>

          <div>
              <button>Simpan</button>
          </div>
      </form>

  </Layout>
)
}

export default EditProduct