import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaProductHunt } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

const ProductModal = ({ product, onClose }) => {
  return (
    <div 
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(event) => event.stopPropagation()} 
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose 
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-500 rounded-lg'>
                    {product.quantity}
                </h2>
                <h4 className='my-2 text-gray-500'>
                    {product._id}
                </h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaProductHunt className='text-red-300 text-2xl'/>
                    <h2 className='my-1'>{product.productName}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <IoMdPricetag className='text-red-300 text-2xl' />
                    <h2 className='my-1'>₹{product.price}</h2>
                </div>
                <p className='mt-4'>More details about product</p>
                <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quos nemo culpa rem neque! Culpa, ad. Aut incidunt magni sapiente laboriosam fuga dolore nulla iure laudantium nisi blanditiis, et, nobis omnis corporis beatae quasi expedita temporibus fugit repudiandae iusto minima aspernatur, aliquam saepe! Rerum alias, vero reprehenderit quam suscipit vitae.</p>
        </div>
    </div>
  )
}

export default ProductModal