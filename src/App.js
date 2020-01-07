import React, {
	useGlobal,
	setGlobal,
	addCallback,
	useState,
	useEffect
} from 'reactn';
import './App.css';
import { Segment, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import MainPanel from './Components/Main/MainPanel';
import Joint from './Components/Joint/Joint';
import Hand from './Components/Hand/Hand';
import Setting from './pictures/settings';
import Anchor from './pictures/Anchor';
import AnchorSetting from './Components/Setting/AnchorSetting';
setGlobal({
	Hand: true,
	HandAmount: [
		'Hand 1',
		'Hand 2',
		'Hand 3',
		'Hand 4',
		'Hand 5',
		'Hand 6',
		'Hand 7',
		'Hand 8'
	],
	Joint: true,
	Setting: true
});
const StyledContainer = styled(Segment.Group)`
	background-color: transparent !important;
	margin: 0px !important;
	height: 640px;
`;
const HandBox = styled.div`
	color: white;
	/* border: 1px solid white !important;
	border-collapse: collapse !important; */
	visibility: ${props =>
		!props.visibility ? 'hidden' : ''};
	padding: 0px !important;
	margin-right: 3px !important;
	width: 300px;
	background-color: rgba(130, 130, 130, 0.05) !important;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3) !important;
	height: auto;
`;
const MainBox = styled.div`
	color: white;
	/* border: 1px solid white !important;
	border-collapse: collapse !important; */
	visibility: ${props =>
		!props.visibility ? 'hidden' : ''};
	padding: 0px !important;
	margin-right: 3px !important;
	width: 450px;
	background-color: rgba(130, 130, 130, 0.05) !important;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3) !important;
`;
const JointBox = styled.div`
	color: white;
	/* border: 1px solid white !important;
	border-collapse: collapse !important; */
	visibility: ${props =>
		!props.visibility ? 'hidden' : ''};
	padding: 0px !important;
	margin-right: 3px !important;
	width: 450px;
	background-color: rgba(130, 130, 130, 0.05) !important;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3) !important;
`;
const SettingsBox = styled.div`
	color: white;
	/* border: 1px solid white !important;
	border-collapse: collapse !important; */
	visibility: ${props =>
		!props.visibility ? 'hidden' : ''};
	padding: 0px !important;
	margin-right: 3px !important;
	width: 450px;
	background-color: rgba(130, 130, 130, 0.05) !important;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3) !important;
	margin-top: 73px;
`;

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
const StyledCaption = styled.span`
	& > svg {
		width: 70px;
		height: 42px;
		fill: white;
		margin-top: 5px;
	}
`;
const StyledCaptionAnchor = styled.div`
	text-align: center;
	& > svg {
		width: 32px;
		height: 32px;
		fill: white;
		margin-top: 5px;
	}
`;
function App() {
	const [joint, setJoint] = useGlobal('Joint');
	const [hand, setHand] = useGlobal('Hand');
	const [setting, setSetting] = useGlobal('Setting');
	return (
		<div className='App-body'>
			<StyledContainer horizontal compact>
				<HandBox visibility={hand}>
					<Hand></Hand>
				</HandBox>
				<MainBox visibility='true'>
					<MainPanel></MainPanel>
					<SettingsBox visibility={setting}>
						<BoxMainPanel>
							<StyledCaption>
								<Setting></Setting>
							</StyledCaption>
							<TextMainPanel>Setting</TextMainPanel>
							<Remove
								icon='x'
								negative
								onClick={() => setSetting(false)}
							></Remove>
						</BoxMainPanel>
						<StyledCaptionAnchor>
							<Anchor></Anchor>
							<TextMainPanel>Anchor</TextMainPanel>
						</StyledCaptionAnchor>
						<AnchorSetting></AnchorSetting>
					</SettingsBox>
				</MainBox>
				<JointBox visibility={joint}>
					<Joint></Joint>
				</JointBox>
			</StyledContainer>
		</div>
	);
}

export default App;
