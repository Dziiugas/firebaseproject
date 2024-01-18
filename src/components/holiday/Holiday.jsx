import {Link, useParams} from "react-router-dom"
import * as service from "../../services/TimeCrudServices";
import { useState } from "react";
import User from "../user/User";
import { auth } from '../../services/AuthServices';
import { useAuthState } from 'react-firebase-hooks/auth';



const Holiday = ()=>{


    const {id} = useParams()

    const [user] = useAuthState(auth);
  
        const [photos, setPhotos] = useState ({
            name:'',
            url:'',
            uid:''
    })



        const handleChange = (e)=>{
            setPhotos({
                ...photos,
                [e.target.name]:e.target.value
    
            })
            service.addPhoto({ ...photos, uid: user.uid });
        }
        



        const submitHandler = (e)=>{
            e.preventDefault();
            if(id){
                service.addPhoto(photos)
            }
            
        }
        
    
    return(
        <div className="container">
            <div className="row">
            <h3><Link to="/page">Atgal</Link></h3>
            
            <form onSubmit={submitHandler}>
            <div class="input-group">
                
  <input type="text" class="form-control rounded" placeholder="" onChange={handleChange}/>
  <button type="submit" class="btn btn-outline-primary" data-mdb-ripple-init>Prideti</button>

</div>
</form>
            </div>
        </div>
     
    

    
    )
    
}

export default Holiday