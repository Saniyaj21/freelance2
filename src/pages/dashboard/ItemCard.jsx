import React from "react";

const ItemCard = ({item}) => {
	console.log(item);
	return (
		<div className='headings flex-center'>
			<div className='empty-logo-div'>
				<i style={{ color: "#2c8ceb" }} className='fa-solid fa-arrow-right'></i>
			</div>
			<div className='article border'>{item?.article}</div>
			<div className='product border'>{item?.product}</div>
			<div className='in-price border'>{item?.inPrice}</div>
			<div className='price border'>{item.price} </div>
			<div className='unit border'>{item.unit}</div>
			<div className='in-stock border'>{item.inStock}</div>
			<div className='description border'>{item.description}</div>
			<div className='empty-logo-div'>
				<i style={{ color: "#5a88ac" }} className='fa-solid fa-ellipsis'></i>
			</div>
		</div>
	);
};

export default ItemCard;
