import { useState } from "react";
import { dataTwo } from "./dataTwo";
function About(){
    const [photo,setPhoto]=useState(0);
    const{ image, description}=dataTwo[photo];
    const [showMore,setShowMore]=useState(false)

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
            <h1>About the company</h1>
        </div>
        <div className="photo">
        <div className="container">
            <button className="cta" onClick={previousPhoto}>◀︎</button>
            <img src={image} width='600px'alt='art' />
            <button className="cta" onClick={nextPhoto}>▶︎</button>
            <p>{showMore?description:description.substring(0,170)}
                <button className="showMore" onClick={()=>setShowMore(!showMore)}>{showMore?'Show less':'Show more'}</button>
            </p>
        </div>
        </div> 
    </div>
}
export default About;