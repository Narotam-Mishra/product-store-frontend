import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductsCard from "../components/home/ProductsCard";
import ProductsTable from "../components/home/ProductsTable";

const Home = () => {
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mern-product-store-apis-naru.onrender.com/api/v1/products")
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center">
        {showType === "table" ? (
          <h1 className="text-3xl my-8 mx-auto">Product Table View</h1>
        ) : (
          <h1 className="text-3xl my-8 mx-auto">Product Card View</h1>
        )}
        <Link to={"/product/add"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            Add product
          </button>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ProductsTable products={products} />
      ) : (
        <ProductsCard products={products} />
      )}
    </div>
  );
}

export default Home