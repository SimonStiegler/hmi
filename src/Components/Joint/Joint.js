import React, { useState, useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Jog from '../../pictures/Jog';
const BoxMainPanel = styled.div`
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
		width: 70px;
		height: 42px;
	}
`;
const Joint = () => {
	const [joint, setJoint] = useGlobal('Joint');
	return (
		<React.Fragment>
			<BoxMainPanel>
				<StyleJog>
					<Jog></Jog>
				</StyleJog>
				<TextMainPanel>Joint</TextMainPanel>
				<Remove
					icon='x'
					negative
					onClick={() => setJoint(false)}
				></Remove>
			</BoxMainPanel>
		</React.Fragment>
	);
};

export default Joint;
