import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      setProductList(resp.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const fetchProductsAgain = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {productList.map((product) => {
        return <h1>{product.title}</h1>;
      })}
    </>
  );
};

export default Products;
