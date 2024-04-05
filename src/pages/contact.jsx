import React,{useState} from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'


import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export function Contact() {
  //useNavigate biasa digunakan untuk handle button login logout
  const navigate=useNavigate()
  const handleClick=()=>
  {
    navigate('/')
  }
  return (
    <Layout title='Contact'>
      <button onClick={handleClick}>Back Home</button>
      <p>Halaman Contact</p>
      
    </Layout>
  )
}

export function About() {
  return (
    <Layout>
      Halaman About - ini dibuat fungsinya di dlm contact.jsx, 
      jd dlm 1 komponen bs export 2 functions
      <li>Function Contact</li>
      <li>Function About</li>
    </Layout>
  )
}
export function MyUploader(){
  const[refresh,setRefresh]=useState(false)
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { 
    console.log(status, meta, file)
    if(status==='uploading')
    {setRefresh(!refresh)}
    if(status==='done')
    {setRefresh(!refresh)}
    if(status==='removed')
    {setRefresh(!refresh)}
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
 
  return (
   <Layout>
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
   </Layout> 
  )
}


