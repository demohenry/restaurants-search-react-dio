import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';


import Skeleton from '../Skeleton';
// import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
	const[imageLoaded, setImageLoaded] = useState(false)

	return (
		<Restaurant onClick={onClick} >
			<RestaurantInfo>
				<Title> {restaurant.name} </Title> 
				<ReactStars count={5} isHalf size={20} edit={false} value={restaurant.rating} activeColor="#6200ee" />
				<Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
			</RestaurantInfo>
			<RestaurantPhoto
			imageLoaded={imageLoaded}
			src={restaurant.photos ? restaurant.photos[0].getUrl() : ''} 
			onLoad={() => setImageLoaded(true)}
			alt={`Foto do ${restaurant.name}`} 
			/>
			{!imageLoaded && <Skeleton width="100px" height="100px"/>}
		</Restaurant>
	);
};

export default RestaurantCard;
