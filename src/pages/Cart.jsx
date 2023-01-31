import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Table from '../components/Table';
import Total from '../components/Total';
const Cart = () => {
  return (
    <>
      <Header location="Your Cart"/>
      <Table />
      <Total />
      <Footer />
    </>
  )
}

export default Cart
