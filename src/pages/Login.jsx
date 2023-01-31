import React from "react";
import css from "../styles/Login.module.css";
import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useGlobalContext } from "../context/Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
	const {setUser, setPassword } = useGlobalContext();
  const [currUser, setCurrUser] = useState("");
  const [currPass, setCurrPass] = useState("");
	const handleSubmit = (e) => {
    e.preventDefault();
		if(currUser === "auth_user" && currPass === "auth_password"){
      setUser(currUser);
      setPassword(currPass);
      navigate("/");
    }
    else{
      toast.error("Invalid Credentials!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });
    }
	};
	return (
		<div className={css.body}>
			<div className={css.container}>
				<div className={css.left}>
					<form onSubmit={handleSubmit}>
						<div className={css.inputContainer}>
							<label htmlFor="uname">Username </label>
							<input
								type="text"
								name="uname"
								id="uname"
                value={currUser}
								autoComplete="off"
                onChange={(e)=>setCurrUser(e.target.value)}
							/>
						</div>
						<div className={css.inputContainer}>
							<label htmlFor="pass">Password </label>
							<input
								type="password"
								name="pass"
								id="pass"
                value={currPass}
								autoComplete="off"
                onChange={(e) => setCurrPass(e.target.value)}
							/>
						</div>
						<button type="submit" className={css.btn}>
							Log in
						</button>
					</form>
				</div>
				<div className={css.mid}></div>
				<div className={css.right}>
					<div className={css.rightItem}>
						<FaUserLock className={css.icon} />
						<div className={css.details}>
							<h3>User Name</h3>
							<span>auth_user</span>
						</div>
					</div>
					<div className={css.rightItem}>
						<RiLockPasswordFill className={css.icon} />
						<div className={css.details}>
							<h3>Password</h3>
							<span>auth_password</span>
						</div>
					</div>
				</div>
			</div>
      <ToastContainer />
		</div>
	);
};

export default Login;
