import {Link, useParams} from "react-router-dom"
import * as service from "../../services/TimeCrudServices";
import { useState, useEffect } from "react";
import { auth } from '../../services/AuthServices';
import { useAuthState } from 'react-firebase-hooks/auth';
import Photos from "../photos/Photos";



const Holiday = ()=>{


    const {id} = useParams()

    const [user, loading] = useAuthState(auth);
  
        const [photos, setPhotos] = useState ({
            description:'',
            url:'',
            uid:''
    })

   
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                if (user) {
                    const fetchedPhotos = await service.getAllPhotos(photos);
                    setPhotos(fetchedPhotos);
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (!loading) {
            fetchPhotos();
        }
    }, [user, loading]);




        const handleChange = (e)=>{
            setPhotos({
                ...photos,
                [e.target.name]:e.target.value
    
            })
            service.addPhoto({ ...photos, uid: user.uid });
        }
        
        const handleDelete = async (photoId) => {
            try {
                await service.deletePhoto(photoId);
                setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
            } catch (error) {
                console.error(error);
            }
        };



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