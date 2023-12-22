import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from 'notistack';

const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
        .get(`https://mern-product-store-apis-naru.onrender.com/api/v1/products/${id}`)
        .then((response) => {
            setPrice(response.data.price);
            setQuantity(response.data.quantity);
            setProductName(response.data.productName);
        })
        .catch((err) => {
            setLoading(false);
            //alert('An error happened. Please Check console');
            enqueueSnackbar('Error', {variant: 'error'});
            console.log(err);
        })
  }, [enqueueSnackbar, id])

  const handleUpdateProduct = () => {
    const data = {
      productName,
      price,
      quantity,
    };
    setLoading(true);
    axios
      .patch(`https://mern-product-store-apis-naru.onrender.com/api/v1/products/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Product details updated successfully!!', {variant: 'success'});
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        //alert("An error happened. Please Check console");
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Update Product Details</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-3 mx-auto">
        <div className="my-3">
          <label htmlFor="pName" className="text-xl mr-4 text-gray-500">
            Product Name
          </label>
          <input
            type="text"
            id="pName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="pPrice" className="text-xl mr-4 text-gray-500">
            Price
          </label>
          <input
            type="text"
            id="pPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="pQuantity" className="text-xl mr-4 text-gray-500">
            Quantity
          </label>
          <input
            type="number"
            id="pQuantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleUpdateProduct}>
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;