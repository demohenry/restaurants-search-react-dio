import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Search, Wrapper, CaroulselTitle, Carousel } from './styles';
import { useSelector } from 'react-redux';

export const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const { restaurants } = useSelector((state) => state.restaurants)
	const [query, setQuery] = useState(null)
	const [modalOpened, setModalOpened] = useState(false);

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptativeHeight: true,
	};

	function handleKeyPress(event){
		if(event.key === 'Enter'){
			setQuery(inputValue)
		}
	}

	function handleInputChange(event){
		event.preventDefault()
		setInputValue(event.target.value)
	}

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
					<CaroulselTitle>Na sua Área</CaroulselTitle>
					<Carousel {...settings}>
						{restaurants.map((restaurant) => 
						<Card 
						key={restaurant.place_id}
						photo={restaurant.photos ? restaurant.photos[0].getUrl() : `Foto do ${restaurante.name}`} 
						title={restaurant.name}
						/>)}
					</Carousel>
				</Search>
				{restaurants.map((restaurant) => (
				<RestaurantCard restaurant={restaurant}/>
				))};
			</Container>

			<Map query={query} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
		</Wrapper>
	);
};
