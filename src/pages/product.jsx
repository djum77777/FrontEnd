//pakai data API dari project MVC
import axios from 'axios'
import React from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom';
import { useGet } from '../hook/usefetch';

function Product() {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const getData = async() => {
  //     try {
  //         setIsLoading(true)
  //         const response = await axios.get('http://localhost:8000/products')
  //         console.log(response.data);
  //         setData(response.data)
  //         setIsLoading(false)
          
  //     } catch (error) {
  //         console.log(error);
  //         setIsLoading(false)
  //     }
  // }

  // useEffect(() => {
  //     getData()
  // }, [])

  //use our own created hook
  const [data, isLoading,getData] = useGet('http://localhost:8000/product')

  const navigate = useNavigate()

  const handleDelete = async(id) => {
      try {
          await axios.delete(`http://localhost:8000/deleteProduct/${id}`)
          alert('delete data berhasil')
          getData();
        } catch (error) {
            console.log(error);
        }
    }
    
return (
  <Layout title='Produk'>
  <div>
      <div>
          <Link to='/add-product'>Tambah</Link>
      </div>
      {
          isLoading ? 'Loading . . . ' : data?.length === 0 ? 'Data Kosong' :

          data && data.map((item) => {
              return(
                  <div key={item.id}>
                      <p>Name: {item.name}</p>
                      <p>Price: {item.price}</p>
                      <p>Store ID: {item.store_id}</p>
                      <div style={{display: 'flex', gap: 10}}>
                          <button onClick={() => navigate(`/edit-product/${item.id}`)}>Edit</button>
                          <button onClick={() => handleDelete(item.id)}>Delete</button>
                      </div>
                      <hr />
                  </div>
              )
          })
      }
  </div>
</Layout>
)
}

export default Product