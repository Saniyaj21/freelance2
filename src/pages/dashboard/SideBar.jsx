import React from "react";

const SideBar = () => {
	return (
		<div className='side-bar-main'>
			<h2>Menu</h2>
			<ul>
				<li>
					<div><i style={{color:"#a3faff"}} className="fa-solid fa-file-invoice aqua"></i>Invoice</div>
				</li>
				<li>
					<div><i style={{color:"#64f6cf"}} className="fa-solid fa-user"></i>Customers</div>
				</li>
				<li>
					<div><i style={{color:"#ace6fa"}} className="fa-solid fa-briefcase"></i>My Buisness</div>
				</li>
				<li>
					<div> <i style={{color:"#67ddf6"}} className="fa-solid fa-book"></i>Invoice journal</div>
				</li>
				<li>
					<div><i style={{color:"#ff9c2c"}} className="fa-solid fa-tag"></i>Price List</div>
				</li>
				<li>
					<div> <i style={{color:"#60e8f1"}} className="fa-regular fa-file-lines"></i>Multiple Invoicing</div>
				</li>
				<li>
					<div><i style={{color:"#ef8fbd"}} className="fa-solid fa-money-check-dollar"></i>Unpaid Invoices</div>
				</li>
				<li>
					<div><i style={{color:"#fde782"}} className="fa-solid fa-envelopes-bulk"></i>Offers</div>
				</li>
				<li>
					<div> <i style={{color:"#a1e5f2"}} className="fa-solid fa-store"></i>Inventory Control</div>
				</li>
				<li>
					<div><i style={{color:"#1c99f9"}} className="fa-solid fa-user-group"></i>Member Invoicing</div>
				</li>
				<li>
					<div> <i style={{color:"#a2cafc"}} className="fa-solid fa-arrows-turn-to-dots"></i>Import/Export</div>
				</li>
				<li>
					<div> <i style={{color:"#d1fcf0"}} className="fa-solid fa-right-from-bracket"></i>Log out</div>
				</li>
				
			</ul>
		</div>
	);
};

export default SideBar;
