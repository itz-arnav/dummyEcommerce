import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import css from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={css.body}>
    <Header location="All Products" />
    <Products />
    <Footer />
    </div>
  )
}

export default Home
