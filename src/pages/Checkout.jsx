import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useEffectOnce} from 'react-use';
import logo from "../data/cart.json";
import Lottie from 'react-lottie';

import { useGlobalContext } from '../context/Context';
import css from "../styles/Checkout.module.css";

const Checkout = () => {
  
const {setCart} = useGlobalContext();

useEffectOnce(() => {
    setCart([]);
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Header location = "Checkout: Complete"/>
      <div className={css.container}>
      <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      />
      <span>Thank you For Shopping With Us</span>
      </div>
      <Footer />
    </>
  )
}

export default Checkout;
