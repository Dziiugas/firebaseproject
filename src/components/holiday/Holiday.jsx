import {Link} from "react-router-dom"
import { addPhoto,deletePhoto } from "../../services/TimeCrudServices";
import { useEffect,useState } from "react";

const Holiday = ()=>{

    const AddPhoto =()=>{
        const [photos, setPhotos] = useState ({
            name:'',
            url:'',
        })

       
    }

    return(
        <div className="container">
            <div className="row">
            <h3><Link to="/page">Atgal</Link></h3>

            <div class="input-group">
  <input type="url" class="form-control rounded" placeholder="" />
  <button type="submit" class="btn btn-outline-primary" data-mdb-ripple-init >Prideti</button>
</div>
            </div>
        </div>
     
        


    )
}
export default Holiday