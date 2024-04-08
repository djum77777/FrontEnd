import './global.css';
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

//import Home from './pages/home';
//import {Contact,About} from './pages/contact';
//import NotFound from './pages/notfound';
//import UserDetail from './pages/userDetail';
//smua import diatas kt pindahin di file index.js dlm folder pages
import { Home,Contact,About,NotFound,UserDetail } from './pages';
import { MyUploader } from './pages/contact';
import { GetAxios } from './pages/data';
import GetProduct from './pages/product';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';
import Chart, { ChartAPI, ChartSix } from './pages/chart';
import MyChart from './pages/chart';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/upload" element={<MyUploader/>} />
      <Route path="/data" element={<GetAxios/>} />
      <Route path="/product" element={<GetProduct/>}/>
      <Route path="/add-product" element={<AddProduct/>}/>
      <Route path="/edit-product/:id" element={<EditProduct/>}/>
      <Route path="/deleteProduct/:id" element={<delete/>}/>
      <Route path="/chart" element={<ChartSix/>} />  
      <Route path="/about" element={<About/>} />  
      <Route path="/user-detail/:userid" element={<UserDetail/>} />
    </Routes>
  </Router>
  )
}

export default App