import React from 'react';
import styled from 'styled-components';
import Settings from '../pictures/settings';
import { Button, Grid, Select } from 'semantic-ui-react';
const StyledContainer = styled.div`
	width: 300px;
`;
const MainHeader = styled.p`
	display: inline-block;
	font-size: 3em;
	width: 100%;
	margin: 0px;
	text-align: center;
`;
const Header = styled.div`
	position: relative;
	border-bottom: 1px solid white;
`;
const ButtonSettings = styled(Button)`
	position: absolute;
	padding: 0px !important;
	right: 4px !important;
	top: 4px !important;
	border: none !important;
	background-color: transparent !important;
`;
const ColumnText = styled(Grid.Column).attrs({
	textAlign: 'right'
})`
	margin: 0px !important;
	font-size: 2em;
`;
const StyledRow = styled(Grid.Row).attrs({
	verticalAlign: 'middle'
})`
	padding-top: 3px !important;
`;
const StyledGrid = styled(Grid)`
	margin: 0px !important;
	border-bottom: 1px solid white;
`;
const Connect = styled(Button)`
	width: 150px;
	font-size: 1.5em !important;
	padding: 2px !important;
	height: 38px;
`;
const ColumnInput = styled(Grid.Column).attrs({
	verticalAlign: 'middle'
})`
	margin: 0px !important;
`;
const StatusColor = styled.span`
	display: inline-block;
	width: 35px;
	height: 35px;
	background-color: red;
	border-radius: 20px;
	transform: translateY(10px);
	margin-left: 2px;
`;
const MainPanel = () => {
	return (
		<React.Fragment>
			<Header>
				<MainHeader>Main Panel</MainHeader>
				<ButtonSettings>
					<Settings
						style={{
							fill: 'white',
							width: '40px',
							height: '40px'
						}}
					></Settings>
				</ButtonSettings>
			</Header>
			<StyledGrid divided='vertically'>
				<StyledRow columns={2}>
					<ColumnText>Status:</ColumnText>
					<ColumnInput>
						<Connect>Connect</Connect>
						<StatusColor></StatusColor>
					</ColumnInput>
				</StyledRow>

				<StyledRow columns={2}>
					<ColumnText>Programm:</ColumnText>
					<ColumnInput>
						<Select></Select>
					</ColumnInput>
				</StyledRow>
				<StyledRow columns={2}>
					<ColumnText>Line:</ColumnText>
					<ColumnInput style={{ 'font-size': '2em' }}>
						1
					</ColumnInput>
				</StyledRow>
				<StyledRow columns={2}>
					<ColumnText>Signal</ColumnText>
					<ColumnInput>
						<Button
							style={{ width: '196px', height: '38px' }}
						></Button>
					</ColumnInput>
				</StyledRow>
			</StyledGrid>
		</React.Fragment>
	);
};

export default MainPanel;
