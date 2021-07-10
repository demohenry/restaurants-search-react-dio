import React from 'react';
import ReactStars from 'react-rating-stars-component';

// import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
	return (
		<Restaurant onClick={onClick} >
			<RestaurantInfo>
				<Title> {restaurant.name} </Title> 
				<ReactStars count={5} isHalf size={20} edit={false} value={restaurant.rating} activeColor="#6200ee" />
				<Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
			</RestaurantInfo>
			<RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : ''} 
			alt={`Foto do ${restaurant.name}`} />
		</Restaurant>
	);
};

export default RestaurantCard;
