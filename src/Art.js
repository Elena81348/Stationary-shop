function Art({itemsForSale}){
    return(
        <div className="products">
            {itemsForSale.map((element=>{
                const{ id, name, price, image }=element;
                return(
                    <div key={id} className='product-card'>
                        <img src={image} width='400px' height='300px' alt='art'/>
                    <div>
                        <h3>{name}</h3>
                        <h3>${price}</h3>
                    </div>
                    </div>
                    
                )
            }))}
        </div>
    )
}
export default Art;