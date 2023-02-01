import React from 'react'
import { useGlobalContext } from '../context/Context'
import { useState } from 'react';
import { useEffect } from 'react';
import css from "../styles/Total.module.css";
import { useNavigate } from 'react-router-dom';

const Total = () => {
    const navigate = useNavigate();

    const {cart} = useGlobalContext();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item) => newTotal += item.qty * item.price);
        setTotal(newTotal);
    }, [cart]);

    const handleCheckout = () => {
      navigate("/checkout");
    }

  return (
    <div className = {css.body}>
      <span>Total : ${total}</span>
      <button className={css.btn} onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default Total
