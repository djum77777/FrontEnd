const Navbar=(props)=>{
    return (
        <div className="container">
            <p>{props.isLogin ? 'logged in' : 'not logged in'}</p>
            <div><h1>logo</h1></div>    
            <button onClick={props.handleLogin}>Login Now</button>
        </div>
    );
};

export default Navbar;