import {Link, useParams} from "react-router-dom"
import * as service from "../../services/TimeCrudServices";
import { useEffect,useState } from "react";

const Holiday = ()=>{


    const {id} = useParams()
    const AddPhoto =()=>{
        const [photos, setPhotos] = useState ({
            name:'',
            url:'',
    })
        useEffect(()=>{
            id && service.showById(photo=>setPhotos(photo),id)
        },[id])

        const handleChange = (e)=>{
            const value = e.target.value
            setPhotos({
                ...photos,
                [e.target.name]:value
            })
        }
        const submitHandler = (e)=>{
            e.preventDefault();
            if(id){
                service.updatePhoto(id,photos)
            }else{
                service.addPhoto(photos)
            }
        }
    
    }
    
    return(
        <div className="container">
            <div className="row">
            <h3><Link to="/page">Atgal</Link></h3>
            
            
            <div class="input-group">
                
  <input type="url" class="form-control rounded" placeholder="" onChange={handleChange}/>
  <button type="submit" class="btn btn-outline-primary" data-mdb-ripple-init onSubmit={submitHandler}>Prideti</button>

</div>
            </div>
        </div>
     
    

    
    )
    
}

export default Holiday