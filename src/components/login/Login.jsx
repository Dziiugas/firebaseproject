import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithNameAndPassword } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = ()=>{
    const navigate = useNavigate();
const [credentials, setCredentials] = useState({
    email:'',
    password:''
})
const [user,loading, error] = useAuthState(auth);
const handleChange = (e)=>{
    const value = e.target.value;
    setCredentials({
        ...credentials,
        [e.target.name]:value
    })
}

const submitHandler = (e)=>{
    e.preventDefault();
    signInWithNameAndPassword(credentials.name, credentials.password)
}

useEffect(()=>{
    if (loading) return;
    if(user) navigate('/page');
}, [user,loading])
return(
    <div className="container">
    <h2 className="mt-3 text-center">Prisijunk</h2>
    <form onSubmit={submitHandler}>
    <div className="form">
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Vardas" name="name"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder="Slaptazodis" name="password"  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary"><Link to="/page">Prisijungti</Link></button>
            </div>
            <div className="mb-3">
                <p>Neturite paskyros ? <Link to="/register" >Registruokites</Link></p>
            </div>
            
    </div>
    </form>
    </div> 
)
}

export default Login