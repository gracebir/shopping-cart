import ProductItem from "./ProductItem"


function Product(props:any) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {props.products?.slice(0,4).map((prod:any,i:number)=>(
                <ProductItem
                key={prod.id}
                id={prod.id}
                title={prod.title}
                description={prod.description}
                category={prod.category}
                price={prod.price}
                image={prod.image}
                />
            ))}

            <img className="md:col-span-full" 
            src="https://links.papareact.com/dyz" 
            alt="category" />

            <div className='md:col-span-2'>
                {props.products?.slice(5,6).map((prod:any,i:number)=>(
                    <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    category={prod.category}
                    price={prod.price}
                    image={prod.image}
                    />
                ))}
            </div>
            {props.products?.slice(5,props.products.length).map((prod:any,i:number)=>(
                <ProductItem
                key={prod.id}
                id={prod.id}
                title={prod.title}
                description={prod.description}
                category={prod.category}
                price={prod.price}
                image={prod.image}
                />
            ))}
        </div>
    )
}

export default Product
