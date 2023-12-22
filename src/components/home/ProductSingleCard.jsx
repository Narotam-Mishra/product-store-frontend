import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import ProductModal from "./ProductModal";

const ProductSingleCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={product._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-500 rounded-lg">
        <div className="text-xs"><FaCartPlus/>{product.quantity}</div>
      </h2>
      <h4 className="my-2 text-gray-500">{product._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <FaProductHunt className="text-red-300 text-2xl" />
        <h2 className="my-1">Product Name: {product.productName}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <IoMdPricetag className="text-red-300 text-2xl" />
        <h2 className="my-1">Price: ₹{product.price}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/product/details/${product._id}`}>
          <BsInfoCircle className="text-2xl text-green-800chover:text-black" />
        </Link>
        <Link to={`/product/update/${product._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/product/delete/${product._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductSingleCard;
