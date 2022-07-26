
import classes from './Cart.module.css';
import React from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Order from './Order';
import { useState } from 'react';

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(true);

  const orderClickHandler = () => {
    setOrderModalOpen(true);
    setCartModalOpen(false);
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1});
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      { isCartModalOpen ?
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems ? <button className={classes.button} onClick={orderClickHandler}>Order</button> : ''}
          </div>
        </Modal>
        : ''
      }
      {isOrderModalOpen ? <Order onClose={props.onClose} /> : ''}
    </React.Fragment>
  );
};

export default Cart;
