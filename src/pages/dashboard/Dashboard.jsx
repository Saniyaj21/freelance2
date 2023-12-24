import "./Dashboard.scss";
import dp from "../../assets/dp-min.png";
import SideBar from "./SideBar";
import ItemCard from "./ItemCard";
import axios from "axios";
import { baseUrl } from "../../App";
import { useEffect, useState } from "react";

const Dashboard = () => {


	const [articals, setArticlas] = useState([]);
	const getArticals = async () => {
		try {
			const { data } = await axios.get(`${baseUrl}/articals`);
			setArticlas(data.artical);
			console.log(data.artical);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getArticals();
	}, []);


	return (
		<div className='dash-main'>
			<div className='dash-head'>
				<div className='dash-nav'>
					<div className='ham'>
						<i className='fa-solid fa-bars'></i>
					</div>
					<div className='profile'>
						<div>
							<img src={dp} alt='Profile pic' />
						</div>
						<div>
							<p>John Andre</p>
							<p>Storfjord AS</p>
						</div>
					</div>
					<div className='flag'>
						<p>Norsk Bokmal</p>
						<img src='/flag.png' alt='' />
					</div>
				</div>
			</div>

			<div className='dash-board'>
				<div className='sidebar'>
					<SideBar />
				</div>
				<div className='data-container'>
					<div className='option-container'>
						<div className='search-container'>
							<div>
								<input type='text' placeholder='Search Article No...' />{" "}
								<button>
									<i
										style={{ color: "#96dce9" }}
										className='fa-solid fa-magnifying-glass'
									></i>
								</button>
							</div>
							<div>
								<input type='text' placeholder='Search Product...' />{" "}
								<button>
									<i
										style={{ color: "#96dce9" }}
										className='fa-solid fa-magnifying-glass'
									></i>
								</button>
							</div>
						</div>

						<div className='funcion-box'>
							<div>
								<span>New Product</span>
								<i
									style={{ color: "#49dc9b" }}
									className='fa-solid fa-circle-plus'
								></i>
							</div>
							<div>
								<span>Print List</span>
								<i
									style={{ color: "#4ce4f6" }}
									className='fa-solid fa-print'
								></i>
							</div>
							<div>
								<span>Advanced mode</span>
								<i
									style={{ color: "#48cfec" }}
									className='fa-solid fa-ellipsis'
								></i>
							</div>
						</div>
					</div>

					<div className='data-section'>
						<div className='headings flex-center'>
							<div className='empty-logo-div'></div>
							<div className='article'>
								Article No.
								<i
									style={{ color: "#94eaf4" }}
									className='fa-solid fa-arrow-down'
								></i>
							</div>
							<div className='product'>
								Product/Service{" "}
								<i
									style={{ color: "#8cf19c" }}
									className='fa-solid fa-arrow-down'
								></i>
							</div>
							<div className='in-price'>In Price </div>
							<div className='price'>Price </div>
							<div className='unit'>Unit</div>
							<div className='in-stock'>In Stock</div>
							<div className='description'>Description</div>
							<div className='empty-logo-div'></div>
						</div>
						{articals && articals.map((item)=>(
							<ItemCard key={item._id} item={item} />
						))}
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
