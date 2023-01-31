import css from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaFilter } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi";


const Header = ({ location }) => {

	const {items, setItems, setUser, setPassword, cart,selectedOption, setselectedOption } = useGlobalContext();
	

	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();
		setUser("");
		setPassword("");
		navigate("/login");
	};

	// const handleResetCart = (e) => {
	// 	e.preventDefault();
	// 	 setCart([]);
	// 	 let newBtnText = []
	// 	 btnText.forEach(element => {
	// 		newBtnText.push("Add To Cart");
	// 	 });
	// 	 setBtnText(newBtnText);
	// };
	
	const handleCartClick = (e) => {
		e.preventDefault();
		navigate("/cart");
		
	}
	const handleSort = (e) => {
		e.preventDefault();
		const chosen = e.target.value;
		setselectedOption(chosen);
		console.log(chosen);
		if(chosen === '1'){

			let sortedItems = items.sort(
				(i1, i2) => (i1.title > i2.title) ? 1 : (i1.title < i2.title) ? -1 : 0);
			setItems(sortedItems);
		}
		else if(chosen === '2'){
			let sortedItems = items.sort(
				(i1, i2) => (i1.title < i2.title) ? 1 : (i1.title > i2.title) ? -1 : 0);
				setItems(sortedItems);
		}
		else if(chosen === '3'){
			let sortedItems = items.sort(
				(i1, i2) => (i1.price > i2.price) ? 1 : (i1.price < i2.price) ? -1 : 0);
				setItems(sortedItems);
		}
		else{
			let sortedItems = items.sort(
				(i1, i2) => (i1.price < i2.price) ? 1 : (i1.price > i2.price) ? -1 : 0);
				setItems(sortedItems);
		}
	}
	return (
		<>
			<div className={css.header}>
				<div className={css.container}>
					<div className={css.logo}>
						<Link to="/">
							<img src="/aotlogo.webp" alt="Company Logo" />
						</Link>
					</div>
					{/* <div className={css.navigations}>
						<ul className={css.links}>
							<li>
								<NavLink
									to="/"
									className={css.link}
								>
									Home
								</NavLink>
							</li>
							<NavLink
								to="/about"
								className={css.link}
							>
								About
							</NavLink>
							<li className={css.link} onClick={handleResetCart}>
								Reset Cart
							</li>
						</ul>
					</div> */}
					<div className={css.right}>
						<div className={css.detailCart}>
						<FaShoppingCart className={css.cart} onClick={handleCartClick}/>
						<span className={css.myCart}>{cart.length}</span>
						</div>
						<button
							className={`${css.button} ${css.btn}`}
							onClick={handleLogout}
						>
							<HiOutlineLogout />
						</button>
					</div>
				</div>
			</div>
			<div className={css.bar}>
				<div className={css.barContainer}>
					<div className={css.name}>{location}</div>
					{ location === "All Products" && <div className={css.sort}>
					    
						<FaFilter className={css.filter}/>
						<select value={selectedOption} onChange={handleSort} className={css.select}>
							<option value="1">NAME (A - Z)</option>
							<option value="2">NAME (Z - A)</option>
							<option value="3">PRICE (L - H)</option>
							<option value="4">PRICE (H - L)</option>
						</select>
					</div>}
				</div>
			</div>
		</>
	);
};

export default Header;
