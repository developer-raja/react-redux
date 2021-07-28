import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { fetchProducts } from '../actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => {
  //       console.log(`Err is ${err}`);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
