/* eslint-disable react/jsx-indent-props */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
// import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import {
	Container,
	Search,
	Wrapper,
	CarouselTitle,
	Carousel,
	ModalTitle,
	ModalContent,
} from './styles';

export const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [query, setQuery] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);
	const [placeId, setPlaceId] = useState(null);
	const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptativeHeight: false,
	};

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			setQuery(inputValue);
		}
	}

	function handleInputChange(event) {
		event.preventDefault();
		setInputValue(event.target.value);
	}

	function handleOpenModal(placeId) {
		setPlaceId(placeId);
		setModalOpened(true);
	}

	const isOpen = restaurantSelected?.opening_hours?.open_now;

	return (
		<Wrapper>
			<Container>
				<Search>
					<img src={logo} alt="Logo Finder Restaurant" />
					<TextField
						label="Pesquisar"
						outlined
						trailingIcon={<MaterialIcon role="button" icon="search" />}>
						<Input value={inputValue} onKeyPress={handleKeyPress} onChange={handleInputChange} />
					</TextField>
					{restaurants.length > 0 ? (
						<>
							<CarouselTitle>Na sua Área</CarouselTitle>
							<Carousel {...settings}>
								{restaurants.map((restaurant) => (
									<Card
										key={restaurant.place_id}
										photo={
											restaurant.photos
												? restaurant.photos[0].getUrl()
												: `Foto do ${restaurant.name}`
										}
										title={restaurant.name}
									/>
								))}
							</Carousel>
						</>
					) : (
						<Loader />
					)}
				</Search>
				{restaurants.map((restaurant) => (
					<RestaurantCard
						onClick={() => handleOpenModal(restaurant.place_id)}
						restaurant={restaurant}
					/>
				))}
				;
			</Container>

			<Map query={query} placeId={placeId} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				{restaurantSelected ? (
					<>
						<ModalTitle>{restaurantSelected?.name}</ModalTitle>
						<ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
						<ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
						<ModalContent className={`openOrClosed ${isOpen ? 'opened' : 'closed'} `}>
							{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado'}
						</ModalContent>
					</>
				) : (
					<>
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
					</>
				)}
			</Modal>
		</Wrapper>
	);
};
