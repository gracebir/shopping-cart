import CheckoutItem from "../components/CheckoutItem"
import Header from "../components/Header"
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice'
import { IProduct } from "../interfaces/product.interface";

function Checkout() {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    return (
        <div className='bg-gray-100'>
            <Header/>
           <main className='lg:flex-grow max-w-screen-2xl'>
           <div className='flex flex-col bg-white p-10 m-5 shadow-md'>
                    {items.length > 0 && (
                        <div>
                            <h2> Total ({items.length} items) : 
                            <span className='font-bold'><Currency quantity={total} currency="USD"/></span>
                            </h2>
                            <button className='button rounded float-right'>Proceed To Checkout</button>
                        </div>
                    )}
            </div>

           <div className='flex-grow m-5 shadow-sm'>
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your Shopping basket is empty' : 'Your Shopping Basket'}</h1>
                        { items.map(({id,title, price, description,category,image}:IProduct)=>(
                            <CheckoutItem
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            category={category}
                            image={image}
                            description={description}
                            />
                        ))}
                    </div>
                </div>

               
           </main>
        </div>
    )
}

export default Checkout
