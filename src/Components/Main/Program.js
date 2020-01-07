import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Off from '../../pictures/Off';
import Play from '../../pictures/Play';
import End from '../../pictures/End';
import Reset from '../../pictures/Reset';
import Back from '../../pictures/Back';
import Exe from '../../pictures/Exe';
import Go from '../../pictures/Go.png';
import Start from '../../pictures/Start';

const hoverColor = 'black';
const Grid = styled.div`
	display: grid;
	grid-template-rows: 65px 65px;
	padding-left: 20px;
	padding-right: 20px;
	grid-auto-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 5px;
	grid-template-areas:
		'Servo Start End Reset'
		'Back Go Play Exe';
`;
const BtServo = styled(Button)`
	justify-self: stretch;
	grid-area: Servo;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	& > svg {
		width: 32px;
		float: left;
		justify-self: center;
		margin-left: 2px;
		transform: translateY(8px);
	}
	& > p {
		display: inline-block;
		font-size: 18px;
		line-break: auto;
		width: 60px;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtStart = styled(Button)`
	justify-self: stretch;
	grid-area: Start;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* background-color: red !important; */
	& > svg {
		fill: white;
		width: 40px;
		height: 45px;
		margin-right: 1px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtEnd = styled(Button)`
	justify-self: stretch;
	grid-area: End;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* background-color: red !important; */
	& > svg {
		width: 40px;
		height: 45px;
		transform: translateY(2px);
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtReset = styled(Button)`
	justify-self: stretch;
	grid-area: Reset;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* background-color: red !important; */
	& > svg {
		width: 25px;
		height: 45px;
		transform: translateY(2px);
		margin-left: 4px;
		margin-right: 4px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtBack = styled(Button)`
	justify-self: stretch;
	grid-area: Back;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* background-color: red !important; */
	& > svg {
		width: 25px;
		height: 45px;
		transform: translateY(2px);
		margin-left: 4px;
		margin-right: 4px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtGo = styled(Button)`
	justify-self: stretch;
	grid-area: Go;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* Background-color: red !important; */
	& > img {
		width: 35px;
		height: 45px;
		transform: translateY(2px);
		margin-left: 4px;
		margin-right: 4px;
	}
	& > p {
		display: inline-block;
		font-size: 25px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtPlay = styled(Button)`
	justify-self: stretch;
	grid-area: Play;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* Background-color: red !important; */
	& > svg {
		width: 40px;
		height: 45px;
		margin-left: 2px;
		margin-right: -8px;
	}
	& > p {
		display: inline-block;
		font-size: 22px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const BtExe = styled(Button)`
	justify-self: stretch;
	grid-area: Exe;
	padding: 0px !important;
	align-self: center;
	height: 50px;
	display: flex !important;
	/* Background-color: red !important; */
	& > svg {
		width: 29px;
		height: 45px;
		transform: translateY(2px);
	}
	& > p {
		display: inline-block;
		font-size: 20px;
		line-break: auto;
		align-self: center;
	}
	&:hover {
		color: ${hoverColor}!important;
		& > svg {
			fill: ${hoverColor}!important;
		}
	}
`;
const Program = () => {
	return (
		<Grid>
			<BtServo negative>
				<Off style={{ fill: 'white' }}></Off>
				<p>Servo off</p>
			</BtServo>

			<BtStart positive>
				<Start style={{ fill: 'white' }}></Start>
				<p>Start</p>
			</BtStart>
			<BtEnd negative>
				<End style={{ fill: 'white' }}></End>
				<p>End</p>
			</BtEnd>
			<BtReset negative>
				<Reset style={{ fill: 'white' }}></Reset>
				<p>Reset</p>
			</BtReset>
			<BtBack>
				<Back style={{ fill: 'black' }}></Back>
				<p>Back</p>
			</BtBack>
			<BtGo>
				<img src={Go}></img>
				{/* <Start style={{ fill: 'black' }}></Start> */}
				<p>Go</p>
			</BtGo>
			<BtPlay>
				<Play style={{ fill: 'black' }}></Play>
				<p>Play</p>
			</BtPlay>

			<BtExe>
				<Exe style={{ fill: 'black' }}></Exe>
				<p>D-Exec</p>
			</BtExe>
		</Grid>
	);
};
export default Program;
