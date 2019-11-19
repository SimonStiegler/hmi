import React, { useGlobal, setGlobal } from 'reactn';
import './App.css';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import MainPanel from './Components/Main/MainPanel';
import Joint from './Components/Joint/Joint';
import Hand from './Components/Hand/Hand';
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
	Joint: true
});
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

const StyledContainer = styled(Segment.Group)`
	background-color: transparent !important;
	margin: 0px !important;
`;
function App() {
	const [joint, setJoint] = useGlobal('Joint');
	const [hand, setHand] = useGlobal('Hand');
	return (
		<div className='App-body'>
			<StyledContainer horizontal compact>
				<HandBox visibility={hand}>
					<Hand></Hand>
				</HandBox>
				<MainBox visibility='true'>
					<MainPanel></MainPanel>
				</MainBox>
				<JointBox visibility={joint}>
					<Joint></Joint>
				</JointBox>
			</StyledContainer>
		</div>
	);
}

export default App;
