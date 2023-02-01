import React from "react";
import css from "../styles/Products.module.css";
import { useGlobalContext } from "../context/Context";
import { useState } from "react";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

const Products = () => {
	const { items, cart, setCart} = useGlobalContext();
	let initialQty = []
	items.forEach(item => {
		initialQty.push(1);
	});

	let [qty, setQty] = useState(initialQty);

	const decreaseQty = (item) => {
		let currentQty = qty[item.id - 1];
		if(currentQty > 1){
			currentQty--;
		}
		let newQtyList = []
		qty.forEach((element, id) => {
			if(id === item.id - 1){
				newQtyList.push(currentQty);
			}
			else{
				newQtyList.push(element);
			}
		})
		setQty(newQtyList)
	}
	const increaseQty = (id) => {
		console.log(id);
		let currentQty = qty[id - 1];
		currentQty++;
		console.log("here");
		let newQtyList = []
		for(let i = 0; i < qty.length; i++) {
			if(i === id - 1) {
				newQtyList.push(currentQty);
			}
			else{
				newQtyList.push(qty[i]);
			}
		}
		console.log(newQtyList)
		setQty(newQtyList)
	}

	const handleAddItem = (current) => {
		let flag = false;
		cart &&
			cart.forEach((item) => {
				if (item.id === current.id) {
					flag = true;
				}
			});
		if (!flag) {
			let newCart = cart;
			current.qty = qty[current.id - 1];
			newCart.push(current);
			setCart(newCart);
		} else {
			current.qty = qty[current.id - 1];
			let newCart = cart;
			for(let i = 0; i<newCart.length; i++) {
				if(newCart[i].id === current.id) {
					newCart[i].qty += current.qty;
				}
			}
			setCart(newCart);
		}
	};

	const List = React.memo(({ items }) => {
		return (
		  items.map(item => {
				return (
						<div className={css.item} key={item.id}>
							<div className={css.left}>
								<img src={item.img} alt={item.title} />
							</div>
							<div className={css.mid}>
								<div className={css.title}>{item.title}</div>
								<div className={css.desc}>{item.desc}</div>
							</div>
							<div className={css.quantity}>
								<AiFillCaretLeft className={css.caret}
									onClick={() => decreaseQty(item)}
								/>
								<div className={css.qtyamt}>{qty[item.id-1]}</div>
								<AiFillCaretRight className={css.caret}
								onClick={() => increaseQty(item.id)}
								/>
							</div>
							<div className={css.priceSection}>
									<div className={css.price}>${item.price}</div>
									<button
										className={css.btn}
										onClick={(e) => {
											e.preventDefault();
											handleAddItem(item);
										}}
									>
									Add To Cart
									</button>
							</div>
						</div>
					)
			}
		  ))
	  });

	return (
		<div className={css.body}>
			<div className={css.container}>
			<List items={items} />
			</div>
		</div>
	);
};

export default Products;
