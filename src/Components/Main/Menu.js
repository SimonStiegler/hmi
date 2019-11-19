import React, { useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Hand from '../../pictures/Hand';
import Home from '../../pictures/Home';
import Orient from '../../pictures/Orient.png';
import Jog from '../../pictures/Jog';
const Grid = styled.div`
	display: grid;
	grid-template-rows: 65px;
	padding-left: 20px;
	padding-right: 20px;
	grid-auto-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 5px;
	border-bottom: solid 1px white;
	grid-template-areas: 'Hand Orient Home Jog';
`;
const BtHand = styled(Button)`
	justify-self: stretch;
	grid-area: Hand;
	padding: 0px !important;
	background-color: ${props =>
		props.open ? 'blue' : ''} !important;
	align-self: center;
	height: 50px;
	& > svg {
		width: 32px;
		float: left;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		transform: translateY(5px);
	}
	&:hover {
		color: grey !important;
	}
`;
const BtHome = styled(Button)`
	justify-self: stretch;
	grid-area: Home;
	padding: 0px !important;
	align-self: center;
	height: 50px;
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
	&:hover {
		color: grey !important;
	}
`;
const BtOrient = styled(Button)`
	justify-self: stretch;
	grid-area: Orient;
	padding: 0px !important;
	align-self: center;
	height: 50px;
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
	&:hover {
		color: grey !important;
	}
`;
const BtJog = styled(Button)`
	justify-self: stretch;
	grid-area: Jog;
	padding: 0px !important;
	align-self: center;
	background-color: ${props =>
		props.open ? 'blue' : ''} !important;
	height: 50px;
	& > svg {
		width: 45px;
		float: left;
		height: 40px;
		margin-left: 2px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		transform: translateY(5px);
		float: left;
	}
	&:hover {
		color: grey !important;
	}
`;
const Menu = () => {
	const [joint, setJoint] = useGlobal('Joint');
	const [hand, setHand] = useGlobal('Hand');
	return (
		<Grid>
			<BtHand open={hand} onClick={() => setHand(!hand)}>
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
			<BtJog open={joint} onClick={() => setJoint(!joint)}>
				<Jog></Jog>
				<p>Jog</p>
			</BtJog>
		</Grid>
	);
};
export default Menu;
