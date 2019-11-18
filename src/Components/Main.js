import React, { useState } from 'react';
import styled from 'styled-components';
import Settings from '../pictures/settings';
import { Button, Select } from 'semantic-ui-react';
const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 10px 1fr 40px;
	grid-template-rows: 55px 55px 55px 55px;
	grid-template-areas:
		' Status . BtStatus StatusIcon '
		' Programm . Select Select '
		' Line  . LineText LineText '
		' Signal . SignalButton SignalButton ';
	border-bottom: solid 1px white;
	padding-left: 20px;
	padding-right: 20px;
`;
const Text = styled.p`
	font-size: 30px;
	margin: 0px;
	grid-area: ${props =>
		props.children.slice(0, props.children.length - 1)};
	justify-self: end;
	align-self: center;
`;
const BtStatus = styled(Button)`
	font-size: 24px !important;
	padding: 0px !important;
	transform: translateY(2px);
	height: 30px;
	grid-area: BtStatus;
	align-self: center;
	justify-self: stretch;
`;
const Status = styled.div`
	grid-area: StatusIcon;
	background-color: red;
	display: block;
	width: 30px;
	height: 30px;
	border-radius: 40px;
	align-self: center;
	transform: translateY(2px);
`;
const Program = styled(Select)`
	grid-area: Select;
	transform: translateY(2px);
	height: 30px;
	align-self: center;
	justify-self: stretch;
`;
const LineText = styled.p`
	font-size: 30px;
	margin: 0px;
	grid-area: LineText;
	justify-self: start;
	align-self: center;
`;
const SignalButton = styled(Button)`
	font-size: 24px !important;
	padding: 0px !important;
	transform: translateY(2px);
	height: 30px;
	grid-area: SignalButton;
	align-self: center;
	justify-self: stretch;
	margin: 0px !important;
`;
const Main = () => {
	return (
		<Grid>
			<Text>Status:</Text>
			<BtStatus>connect</BtStatus>
			<Status></Status>
			<Text>Programm:</Text>
			<Text>Line:</Text>
			<LineText>1</LineText>
			<Program placeholder='select'></Program>
			<Text>Signal:</Text>
			<SignalButton></SignalButton>
		</Grid>
	);
};
export default Main;
