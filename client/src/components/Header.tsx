import { ShoppingCartIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header>
            <div className='flex justify-around md:justify-around items-center bg-shopping_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex flex-grow sm:flex-grow-0'>
                    <h1 className='text-white text-2xl font-bold cursor-pointer'>ShopRITE.</h1>
                </div>
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link'>
                        <p>Grace Birindwa</p>
                        <p className='font-extrabold md:text-sm'>Account & List</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center'>0</span>
                        <ShoppingCartIcon className='h-10' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
