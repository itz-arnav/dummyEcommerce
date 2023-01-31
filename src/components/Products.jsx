import React from "react";
import css from "../styles/Products.module.css";
import { useGlobalContext } from "../context/Context";

const Products = () => {
	const { items, cart, setCart, btnText, setBtnText } = useGlobalContext();
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
			newCart.push(current);
			setCart(newCart);
			let newBtnText = [];
			for (let i = 0; i < btnText.length; i++) {
				if (i + 1 === current.id) {
					newBtnText.push("Remove");
				} else {
					newBtnText.push(btnText[i]);
				}
			}
			setBtnText(newBtnText);
		} else {
			setCart(cart.filter((item) => item.id !== current.id));
			let newBtnText = [];
			for (let i = 0; i < btnText.length; i++) {
				if (i + 1 === current.id) {
					newBtnText.push("Add To Cart");
				} else {
					newBtnText.push(btnText[i]);
				}
			}
			setBtnText(newBtnText);
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
							<div className={css.right}>
								<div>
									<div className={css.title}>{item.title}</div>
									<div className={css.desc}>{item.desc}</div>
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
										{btnText[item.id - 1]}
									</button>
								</div>
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
