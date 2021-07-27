import Image from 'next/image';
import { IProduct } from '../interfaces/product.interface';
import Currency from 'react-currency-formatter';

function CheckoutItem({
    id,
    title,
    price,
    description,
    category, 
    image
}: IProduct) {
    return (
        <div className='col-span-3 mx-5'>
            <Image
            src={image}
            width={200}
            height={200}
            objectFit='contain'
            />
            <div className="col-span-3 mx-5 mr-3">
                <p>{title}</p>
                <p className='text-xs mt-2 my-2 line-clamp-3'>{description}</p>
                <p><strong><Currency quantity={price} currency='USD'/></strong></p>
            </div>
            <div>
                <button className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutItem
