import React from "react";
import {data} from '../data/data'

const Food = () => {
    console.log(data)
    return (
        <div className='max-w-[1640px] m-auto px4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h1>

            {/*    Filter Row  */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/*    Filter Type  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/*    Filter Price  */}
                <div>
                    <p>Filter Price</p>
                    <div>
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
