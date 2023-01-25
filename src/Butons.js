function Buttons({filteredItems}){
    return(
        <div className="container">
            <button className="btn" onClick={()=>filteredItems('pen')}>Pens</button>
            <button className="btn" onClick={()=>filteredItems('pencil')}>Pencils</button>
            <button className="btn" onClick={()=>filteredItems('marker')}>Markers</button>
            <button className="btn" onClick={()=>filteredItems('notebook')}>Notebook</button>
            <button className="btn" onClick={()=>filteredItems('paint')}>Paints</button>
        </div>
    )
}
export default Buttons;