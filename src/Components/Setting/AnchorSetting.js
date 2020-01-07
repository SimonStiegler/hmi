import React, { useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Show from '../../pictures/Show';
import Save from '../../pictures/Save';
import Delete from '../../pictures/Delete';
import Load from '../../pictures/Load';

const Grid = styled.div`
	display: grid;
	grid-template-rows: 65px;
	padding-left: 20px;
	padding-right: 20px;
	grid-auto-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 5px;
	border-bottom: solid 1px white;
	grid-template-areas: 'Show Save Load Delete';
`;
const BtShow = styled(Button)`
	justify-self: stretch;
	grid-area: Show;
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
		transform: translateY(0);
	}
	&:hover {
		color: grey !important;
	}
`;
const BtLoad = styled(Button)`
	justify-self: stretch;
	grid-area: Load;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	& > svg {
		width: 40px;
		float: left;
		height: 40px;
		margin-left: 2px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		transform: translateY(4px);
	}
	&:hover {
		color: grey !important;
	}
`;
const BtSave = styled(Button)`
	justify-self: stretch;
	grid-area: Save;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	& > svg {
		margin-left: 2px;
		width: 30px;
		float: left;
		height: 30px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		transform: translateY(0px);
	}
	&:hover {
		color: grey !important;
	}
`;
const BtDelete = styled(Button)`
	justify-self: stretch;
	grid-area: Delete;
	padding: 0px !important;
	align-self: center;
	background-color: ${props =>
		props.open ? 'blue' : ''} !important;
	height: 50px;
	& > svg {
		width: 40px;
		float: left;
		height: 40px;
		fill: white;
		margin-right: -5px;
		margin-left: -2px;
	}
	& > p {
		display: inline-block;
		font-size: 19px;
		transform: translateY(5px);
		float: left;
	}
	&:hover {
		color: grey !important;
	}
`;
const AnchorSetting = () => {
	return (
		<Grid>
			<BtShow>
				<Show></Show>
				<p>Show</p>
			</BtShow>
			<BtSave>
				<Save></Save>
				<p>Save</p>
			</BtSave>
			<BtLoad>
				<Load></Load>
				<p>Load</p>
			</BtLoad>
			<BtDelete color='red'>
				<Delete></Delete>
				<p>Delete</p>
			</BtDelete>
		</Grid>
	);
};
export default AnchorSetting;
