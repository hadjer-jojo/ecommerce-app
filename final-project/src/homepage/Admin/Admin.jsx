import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const Admin = () => {
  const [orders, setOrders] = useState([]);


  
  useEffect(() => {
    const fetchOrders = async () => {// affichage orders in page admin 
      try {
        const res = await axios.get("http://localhost:3001/orders");
        setOrders(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();   
  }, []);


  return (
    <div className="admin-orders">
      <h2>📦 Toutes les Commandes</h2>

      {orders.length === 0 ? (
        <p>Aucune commande trouvée.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Téléphone</th>
              <th>Wilaya</th>
              <th>Adresse</th>
              <th>Livraison</th>
              <th>Produits</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.customer.firstName} {order.customer.lastName}</td>
                <td>{order.customer.phone}</td>
                <td>{order.customer.wilaya}</td>
                <td>{order.customer.address}</td>
                <td>{order.deliveryType}</td>
                <td>
                  {order.items.map((item, i) => (
                    <div key={i}>
                      {item.name} × {item.quantity} ({item.price} DA)
                    </div>
                  ))}
                </td>
                <td>{order.totalPrice} DA</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
