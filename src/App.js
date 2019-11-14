import React from 'react';
import './App.css';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import MainPanel from './Components/MainPanel';
const StyledSegment = styled.div`
	color: white;
	/* border: 1px solid white !important;
	border-collapse: collapse !important; */
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
	return (
		<div className='App-body'>
			<StyledContainer horizontal compact>
				<StyledSegment>
					Handaaawwwwwwwwwwwwwwwwwwwwwwwww
				</StyledSegment>
				<StyledSegment>
					<MainPanel></MainPanel>
				</StyledSegment>
				<StyledSegment>Joint</StyledSegment>
			</StyledContainer>
		</div>
	);
}

export default App;
