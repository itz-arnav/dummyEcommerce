import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
    <Header location="All Products" />
    <Products />
    <Footer />
    </>
  )
}

export default Home
