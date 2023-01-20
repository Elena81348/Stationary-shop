import { useState } from "react";
import Slider from "./Slider";

function About(){
    const text=` "Akvarel" is not just a chain of stationery stores. The range of our company is constantly expanding. We strive to please you with bright novelties, various promotions and profitable offers. Being a convenient tool in working with your manager, the stationery catalog will help you quickly find everything you need.
    Akvarel store is an endless flow of creativity, drive and creativity. After all, it is in our store that there is a cool atmosphere for learning, working, choosing materials and the exclusivity of the presented brands. Every day we develop together with our visitors, we open new markets for materials and brands for our favorite buyer.
    All our master classes give students maximum knowledge and creativity for the future! So, let's join our Wonderful family of creativity for new achievements in the future!`

    
    const [showMore,setShowMore]=useState(false);

    
    return<div>
        <div className="container">
            <h1>About the company</h1>
        </div>
        <div className="photo">
        <Slider />
            <p>{showMore?text:text.substring(0,170)}
                <button className="showMore" onClick={()=>setShowMore(!showMore)}>{showMore?'Show less':'Show more'}</button>
            </p>
        </div>
        </div> 
}
export default About;