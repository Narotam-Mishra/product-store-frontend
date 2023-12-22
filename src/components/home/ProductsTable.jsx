import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsTable = ({ products }) => {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">S No.</th>
            <th className="border border-slate-600 rounded-md">Product Id</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Product Name
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Price (in ₹)
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Quantity
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {product._id}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {product.productName}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {product.price}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {product.quantity}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/product/details/${product._id}`}>
                    <BsInfoCircle className="text-2xl text-green-700" />
                  </Link>
                  <Link to={`product/update/${product._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`product/delete/${product._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
