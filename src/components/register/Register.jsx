import {useEffect, useState} from "react"
import {useAuthState} from "react-firebase-hooks/auth"
import {Link, useNavigate} from "react-router-dom"
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"

const Register =()=>{
    const[RegisterInfo,setRegisterInfo] = useState ({

        name:'',
        email:'',
        password:''
    })
    const [user,loading,error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const value = e.target.value;
        setRegisterInfo({
            ...RegisterInfo,
            [e.target.name]:value
        })
    }

    const submitHandler  = (e)=>{
        e.preventDefault();
        console.log(RegisterInfo)
        registerWithEmailAndPassword(RegisterInfo.name, RegisterInfo.email, RegisterInfo.password)
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate("/")
    },[user,loading])
    return(
        <div className="container">
            <h2 className="mt-3 text-center">Registruokis</h2>
            <form onSubmit={submitHandler}>
            <div className="form">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Jusu vardas" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="El. pastas" name="email"  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Slaptazodis" name="password"  onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Registruotis</button>
                    </div>
                    <div className="mb-3">
                        <p>Turite paskyra ? <Link to="/" >Galite prisijungti</Link></p>
                    </div>
            </div>
            </form>
            </div>  
    )
}

export default Register