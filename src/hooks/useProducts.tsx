// using useQuery hook instead of useEffect for fatching and managing asynchronous data.
import { useQuery } from "react-query";
import axios from "axios"; // Axios is used to fetch data from an API endpoint (https://fakestoreapi.com/products)

const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

export const useProducts = () => {
  return useQuery("products", fetchProducts);
};
