import axios from "axios";
import { descendingOrder } from "../utils";

const API_URL =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

const productsApi = () => {
  return axios
    .get(API_URL)
    .then(function(response) {
      console.log(response.data);
      const metadata = response.data.metadata;
      console.log(metadata);
      const products = descendingOrder(response.data.results);
      return { metadata, products };
    })
    .catch(function(error) {
      return error;
    });
};

export default productsApi;
