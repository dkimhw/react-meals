import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className = {classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className = {classes['main-image']}>
        <img src='meals.jpeg' alt="meals"/>
      </div>
    </React.Fragment>
  )
};

export default Header;
