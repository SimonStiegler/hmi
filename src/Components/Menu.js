import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Hand from '../pictures/Hand';
import Home from '../pictures/Home';
import Orient from '../pictures/Orient.png';
const Grid = styled.div`
	display: grid;
	grid-template-rows: 60px;
	padding-left: 20px;
	padding-right: 20px;
	grid-auto-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 5px;
	grid-template-areas: 'Hand Orient Home Jog';
`;
const Elements = styled(Button)`
	grid-area: ${props => props.children};
	justify-self: stretch;
	align-self: center;
`;
const BtHand = styled(Button)`
	justify-self: stretch;
	grid-area: Hand;
	padding: 0px !important;
	align-self: center;
	& > svg {
		width: 32px;
		float: left;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		transform: translateY(5px);
	}
`;
const BtHome = styled(Button)`
	justify-self: stretch;
	grid-area: Home;
	padding: 0px !important;
	align-self: center;
	& > svg {
		width: 40px;
		float: left;
		height: 40px;
	}
	& > p {
		display: inline-block;
		font-size: 19px;
		transform: translateY(7px);
	}
`;
const BtOrient = styled(Button)`
	justify-self: stretch;
	grid-area: Orient;
	padding: 0px !important;
	align-self: center;
	& > img {
		width: 35px;
		float: left;
		height: 40px;
	}
	& > p {
		display: inline-block;
		font-size: 19px;
		transform: translateY(7px);
	}
`;
const Menu = () => {
	return (
		<Grid>
			<BtHand>
				<Hand></Hand>
				<p>Hand</p>
			</BtHand>
			<BtOrient>
				<img src={Orient}></img>
				<p>Orient</p>
			</BtOrient>
			<BtHome>
				<Home></Home>
				<p>Home</p>
			</BtHome>
			<Elements>Jog</Elements>
		</Grid>
	);
};
export default Menu;
