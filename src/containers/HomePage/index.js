import React, {useState, useEffect} from 'react';

import Loader from '../../components/PreLoader';
import Modal from '../../components/Modal';
import Item from './Item';
import {Box} from './styled';
import ProductService from '../../services/product.service';
import CartService from '../../services/cart.service';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    ProductService.getProducts().then((response) => {
      setProducts(response.data.data.Products);
      setLoading(false);
    });
  }, []);

  const addToCart = async (productId) => {
      setLoading(true);
      if(!CartService.getCart()) {
        await CartService.createCart();
      }
      CartService.addProduct(productId).then(response => {
        setLoading(false);
        setModal(response.message);
      });
  };

  return (
    <div className="container">
      <h3 className="center">Our Items</h3>
      <Box className="box">
        <Loader active={loading} />
        {products &&
          products.map((product) => {
            return <Item key={product.id} product={product} addToCart={() => addToCart(product.id)}></Item>;
          })}
      </Box>
      {modal && <Modal content={modal} onclick={() => setModal(false)} />}
    </div>
  );
};

export default HomePage;
