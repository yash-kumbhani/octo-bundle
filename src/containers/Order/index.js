import React, {useState, useEffect} from 'react';

import Price from '../../components/Price';
import OrderService from '../../services/order.service';
import Loader from '../../components/PreLoader';

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    OrderService.getOrders().then(response => {
        if(response.data) {
            setOrders(response.data);
        }
        setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="box">
          <Loader active={loading} />
        <h5 className="center">My Orders</h5>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Transaction ID</th>
                    <th>Price</th>
                    <th>Date</th>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => (
                        <tr>
                            <td>{(index+1)}</td>
                            <td>{order.name}</td>
                            <td>{order.transactionID}</td>
                            <td><Price price={order.totalPrice} /></td>
                            <td>{new Date(order.created_at).toString()}</td>
                        </tr>
                    ))
                }
                <tr>

                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
