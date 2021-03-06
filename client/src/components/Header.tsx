import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import { useRouter } from 'next/router';

function Header() {
    const items = useSelector(selectItems);
    const route = useRouter();

    return (
        <header className='sticky top-0 z-50'>
            <div className='flex justify-around md:justify-around items-center bg-shopping_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex flex-grow sm:flex-grow-0'>
                    <h1 onClick={()=> route.push('/')} className='text-white text-2xl font-bold cursor-pointer'>ShopRITE.</h1>
                </div>
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link'>
                        <p>Grace Birindwa</p>
                        <p className='font-extrabold md:text-sm'>Account & List</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center'>{items.length}</span>
                        <ShoppingCartIcon onClick={()=> route.push('/checkout')} className='h-10' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
