import React from 'react'
import css from "../styles/Footer.module.css";
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={css.bgc}>
    <div className={css.newsletter}>
						<span>Awesome NewsLetter with Weekly Updates</span>
						<div>
							<input
								type="text"
								placeholder="example@example.com"
							></input>
							<button type="submit">Subscribe Now</button>
						</div>
					</div>
    <div className={css.container}>
      <div className={css.socials}>
        <FaFacebookSquare className={css.social}/>
        <FaInstagramSquare className={css.social}/>
        <FaTwitterSquare className={css.social}/>
        <FaLinkedin className={css.social}/>
      </div>
      <div className={css.copyright}>
      © All Rights Reserved
      </div>
    </div>
    </div>
  )
}

export default Footer
