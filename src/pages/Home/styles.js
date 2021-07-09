import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 360px;
	min-width: 280px;
	height: 100vh;
	padding-top: 0;
	overflow-y: scroll;
	border-radius: 10px;
`;

export const Search = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
	padding: 16px;
	border-radius: 5px;

	> img {
		height: 60px;
		padding-bottom: 10px;
	}
`;

export const Map = styled.div`
	background-color: red;
	width: 500px;
`;

export const Carousel = styled(Slider)`
	.slick-slide {
		margin-right: 30px;
		margin-bottom: 10px;
	}
`;

export const CarouselTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.text};
	font-size: 24px;
	font-weight: bold;
	line-height: 29px;
	margin: 16px 0;
`;
