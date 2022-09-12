
import React from 'react';
import Modal from '../UI/Modal';
import classes from './Order.module.css';
/*
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );

*/

const Order = (props) => {

  return (

    <Modal onClose={props.onClose}>
      <div className={classes["order-form"]}>
        <div className={classes['input-group']}>
          <label for="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" placeholder="First Name" className={classes['input']}/>
        </div>
        <div className={classes['input-group']}>
          <label for="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" placeholder="Last Name" className={classes['input']}/>
        </div>
        <div className={classes['input-group']}>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" className={classes['input']}/>
        </div>
        <div className={classes['input-group']}>
          <label for="address">Address</label>
          <input type="address" id="address" name="address" placeholder="Address" className={classes['input']}/>
        </div>
      </div>
      <div className={classes['button-group']}>
        <button className={classes.btn} onClick={props.onClose}>Close</button>
        <button className={classes.btn} onClick={props.onClose}>Checkout Now</button>
      </div>

    </Modal>
  )

};

export default Order;
