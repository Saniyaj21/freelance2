import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='header-main'>
			<div onClick={() => setOpen(!open)} className='hamburg'>
				<i className='fa-solid fa-bars'></i>
			</div>
			<div className='diamond'>
				<Link>
					<img src='/diamond.png' alt='' />
				</Link>
			</div>
			<div className={`item-container `}>
				<div className={`${open ? "in-out-meny" : ""}`}>
					<div>
						<Link to={"/terms"}>Terms </Link>
					</div>
					<div>
						<Link to={"/dashboard/pricelist"}> PriceList </Link>
					</div>
					<div>
						<Link>Våre Kunder </Link>
					</div>
					<div>
						<Link>Om oss</Link>
					</div>
					<div>
						<Link>Kontakt oss </Link>
					</div>
				</div>
			</div>
			<div className='flag-container'>
				<Link>
					<div>Bokmål</div>
					<div>
						<img src='/flag.png' alt='' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
