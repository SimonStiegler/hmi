import React, { useState, useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Jog from '../../pictures/Jog';
import JointItem from './JointItem';
import Joint1 from '../../pictures/Joint1';
import Joint2 from '../../pictures/Joint2';
import Joint3 from '../../pictures/Joint3';
import Joint4 from '../../pictures/Joint4';
import Joint5 from '../../pictures/Joint5';
import Joint6 from '../../pictures/Joint6';

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
			<JointItem
				min='0'
				max='100'
				text='Joint 1:'
				picture={
					<Joint1
						style={{ height: '95px', paddingTop: '4px' }}
					></Joint1>
				}
				defaultValue={50}
				width='50px'
			></JointItem>
			<JointItem
				min='0'
				max='100'
				text='Joint 2:'
				width='100px'
				picture={
					<Joint2 style={{ paddingTop: '4px' }}></Joint2>
				}
				defaultValue={50}
			></JointItem>
			<JointItem
				min='0'
				max='100'
				width='100px'
				text='Joint 3:'
				picture={
					<Joint3 style={{ paddingTop: '4px' }}></Joint3>
				}
				defaultValue={50}
			></JointItem>
			<JointItem
				min='0'
				max='100'
				width='100px'
				text='Joint 4:'
				picture={
					<Joint4 style={{ paddingTop: '4px' }}></Joint4>
				}
				defaultValue={50}
			></JointItem>
			<JointItem
				min='0'
				max='100'
				width='100px'
				text='Joint 5:'
				picture={
					<Joint5
						style={{ height: '95px', paddingTop: '4px' }}
					></Joint5>
				}
				defaultValue={50}
			></JointItem>
			<JointItem
				line='none'
				min='0'
				max='100'
				width='100px'
				text='Joint 6:'
				picture={
					<Joint6
						style={{ height: '95px', paddingTop: '4px' }}
					></Joint6>
				}
				defaultValue={50}
			></JointItem>
		</React.Fragment>
	);
};

export default Joint;
