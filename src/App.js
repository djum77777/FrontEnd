
import './App.css';
import Navbar from './components/navbar';
import { useState } from "react";
const App=()=>{
    const [isLogin,setIsLogin]=useState(false);
    const handleLogin=()=>{
        setIsLogin(true);
    }
    return (<div>
        <Navbar isLogin={isLogin}
        handleLogin={handleLogin}/>
        
        <h1>this is APP Component</h1>
    </div>
    );
}
export default App;
