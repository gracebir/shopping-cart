import { IProduct } from "../interfaces/product.interface"
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import { addToBasket } from "../slices/basketSlice";

function ProductItem({id, title, description,price,category,image}:IProduct) {
    const dispatch = useDispatch();

    const addItemToBasket = ():void =>{
        const product = {
            id,
            title,
            price,
            description,
            category,
            image
        };
        dispatch(addToBasket(product));
    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image
            height={200}
            width={200}
            src={image}
            objectFit="contain"
            />
            <h4 className='my-3'>{title}</h4>
            <p className='text-xs my-2 line-clamp-2'>{description.slice(0,100)}...</p>
            <div className='mb-5'>
                <p>${price}</p>
            </div>
            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default ProductItem
