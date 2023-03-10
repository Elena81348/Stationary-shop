import { dataTwo } from "./dataTwo";
import{useState} from "react";

function Slider(){

const [photo,setPhoto]=useState(0);


    const previousPhoto=()=>{
        setPhoto((photo=>{
            photo--;
            if (photo<0){
                return dataTwo.length-1;
            }
            return photo;
        }))
    }
    const nextPhoto=()=>{
        setPhoto((photo=>{
            photo++;
            if(photo>dataTwo.length-1){
                photo=0
            }
            return photo;
        }))
    }
return<div>
     <div className="container">
            <button className="cta" onClick={previousPhoto}>◀︎</button>
            <img src={dataTwo[photo]} width='600px'alt='art' />
            <button className="cta" onClick={nextPhoto}>▶︎</button>
    
    </div>
</div>
}
export default Slider;