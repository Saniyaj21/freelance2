import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Terms.scss";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { baseUrl } from "../../App";
import PCard from "./PCard";
const Terms = () => {
	const [terms, setTerms] = useState([]);
	const getTerms = async () => {
		try {
			const { data } = await axios.get(`${baseUrl}/terms`);
			setTerms(data.terms);
			console.log(data.terms);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getTerms();
	}, []);

	return (
		<div className='terms-top'>
			<div className='terms-main'>
				<Header />
				<h2>Vilkår</h2>
				<div className='button-box'>
					<Link>
						<button>Lukk og gå tilbake</button>
					</Link>
				</div>

				<div className='text-container'>
					<div>
						{terms && terms.map((item) => <PCard item={item} key={item._id} />)}
					</div>
				</div>
				<div className='button-box'>
					<Link>
						<button>Lukk og gå tilbake</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Terms;
