import React, { useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Settings from '../../pictures/settings';
import Main from './Main';
import Override from './Override';
import Menu from './Menu';
import Program from './Program';
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
const BtSettings = styled(Button)`
	float: right;
	background-color: transparent !important;
	padding: 0px !important;
	margin-left: 2px !important;
	margin-top: 2px !important;
`;

const MainPanel = () => {
	const [setting, setSetting] = useGlobal('Setting');
	return (
		<React.Fragment>
			<BoxMainPanel>
				<TextMainPanel>Main Panel</TextMainPanel>
				<BtSettings
					icon={
						<Settings
							style={{
								fill: setting ? 'blue' : 'white',
								width: '40px',
								height: '40px'
							}}
						></Settings>
					}
					onClick={() => setSetting(!setting)}
				></BtSettings>
			</BoxMainPanel>
			<Main></Main>
			<Override
				min={0}
				max={100}
				defaultValue={50}
			></Override>
			<Menu></Menu>
			<Program></Program>
		</React.Fragment>
	);
};

export default MainPanel;
