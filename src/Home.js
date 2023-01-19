import { useState } from "react";
import Art from "./Art";
import Buttons from "./Butons";
import{data} from './data';

function Home(){
const[art, setArt]=useState(data);
const chosenItems=(searchTerm)=>{
    const newItems=data.filter(element=>element.searchTerm===searchTerm);
    setArt(newItems);
}

    return(<div>
        <div className="container">
            <h1>Akvarel</h1>
        </div>
            <Buttons filteredItems={chosenItems} />
            <Art itemsForSale={art}/>
        </div>
        
    )
}
export default Home;