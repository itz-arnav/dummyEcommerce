import React from 'react'
import css from "../styles/Table.module.css";
import { useGlobalContext } from '../context/Context';
import {GiCancel} from "react-icons/gi";

const Table = () => {
    const {cart, setCart} = useGlobalContext();
    const handleRemove = (id) => {
        let newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }
  return (
    <div className={css.container}>
      <div className={css.main}>
      <table className={css.table}>
                    <thead>
                        <tr>
                        <th>Book</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className={css.tbody}>
                        {
                            cart.map((item) => {
                                const {id, img, title, price, qty} = item;
                                console.log(item);
                                return (
                                    <tr key = {id}>
                                    <td className={css.imageTd} ><img src = {img} alt="" objectFit="cover" width={85} height={85}/></td>
                                    <td>{title}</td>
                                    <td>{price}</td>
                                    <td>{qty}</td>
                                    <td>{qty * price}</td>
                                    <td
                                    style={
                                        {
                                            color:"#ff4d6d",
                                            cursor: "pointer"
                                        }
                                    }
                                    onClick={()=>{handleRemove(id)}}
                                    ><GiCancel className={css.cancel}/></td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
