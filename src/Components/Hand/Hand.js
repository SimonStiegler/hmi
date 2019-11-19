import React, { useState, useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Hand from '../../pictures/Hand';
const BoxHand = styled.div`
	text-align: center;
	border-bottom: solid 1px white;
	height: 55px;
`;
const TextMainPanel = styled.p`
	font-size: 40px;
	margin: 0px;
	display: inline-block;
`;
const Remove = styled(Button)`
	float: right;
	padding: 2px !important;
	font-size: 30px !important;
	margin-left: 2px !important;
	margin-top: 2px !important;
`;
const StyleJog = styled.span`
	& > svg {
		width: 35px;
		height: 42px;
	}
`;
const Grid = styled.div`
	display: flex;

	flex-direction: column;
`;
const DivHand = styled.div`
	align-self: center;
	width: 100%;
	height: 64px;
	display: flex;
	padding-left: 20px;
	padding-right: 20px;
	align-items: center;
	border-bottom: ${props =>
		!props.last ? 'solid 1px white' : ''};
	& > p {
		display: inline-block;
		font-size: 32px;
		text-align: right;
		margin: 0px;
	}
	& > button {
		font-size: 30px !important;
		padding: 0px !important;
		width: calc(100% - 109px);
		margin: 0px !important;
		height: 30px;
		transform: translateY(1px);
	}
`;
const Joint = () => {
	const [, setHand] = useGlobal('Hand');
	const [handAmount, setHandAmount] = useGlobal(
		'HandAmount'
	);
	return (
		<React.Fragment>
			<BoxHand>
				<StyleJog>
					<Hand></Hand>
				</StyleJog>
				<TextMainPanel>Hand</TextMainPanel>
				<Remove
					icon='x'
					negative
					onClick={() => setHand(false)}
				></Remove>
			</BoxHand>
			<Grid>
				{handAmount.map((value, index) => (
					<DivHand last={handAmount.length - 1 === index}>
						<p>{`${value}:`}</p>
						<Button>Open</Button>
					</DivHand>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default Joint;
