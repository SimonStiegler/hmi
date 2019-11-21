import React, { useState } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import NumPad from 'react-numpad';
const Grid = styled.div`
	display: grid;
	grid-template-rows: 55px 30px;
	grid-template-columns: 90px 35px 145px 10px 1fr 35px;
	padding-right: 20px;
	padding-bottom: 10px;

	border-bottom: ${props =>
		props.line ? props.line : 'solid 1px white'};

	grid-template-areas:
		'J1 . Text . SetJoint . '
		'J1 BtMinus Range Range Range BtPlus  ';
`;
const TextOverride = styled.p`
	font-size: 30px !important;
	margin-bottom: 15px !important;
	height: 30px;
	align-self: center;
	text-align: right;
	justify-self: stretch;
	grid-area: Text;
`;
const Range = styled.input`
	align-self: center;
	justify-self: stretch;
	grid-area: Range;
	border-radius: 10px;
	-webkit-appearance: none !important;
	-webkit-transition: 0.2s !important;
	height: 25px;
	&::-moz-range-thumb {
		width: 22px;
		height: 25px;
		border-radius: 10px;
		background: #173789;
		cursor: pointer;
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 23px;
		height: 27px;
		border-radius: 10px !important;
		background: #173789 !important;
		border: solid 1px grey;
		cursor: pointer;
	}
`;
const BtPlus = styled(Button)`
	grid-area: BtPlus;
	width: 40px;
	height: 40px;
	font-size: 25px !important;
	padding: 0px !important;
	transform: translateY(-7px);
	background-color: transparent !important;
	color: white !important;
	box-shadow: none !important;
	&:hover {
		color: grey !important;
	}
`;
const BtMinus = styled(Button)`
	grid-area: BtMinus;
	width: 30px;
	height: 40px;
	font-size: 25px !important;
	padding: 0px !important;
	transform: translateY(-8px);
	background-color: transparent !important;
	color: white !important;
	box-shadow: none !important;
	align-self: flex-start;
	&:hover {
		color: grey !important;
	}
`;
const StyleJoint = styled.div`
	grid-area: J1;
	& > svg {
		width: 100%;
		height: auto;
	}
`;
const StyledNumPad = styled.div`
	grid-area: SetJoint !important;
	height: 30px;
	align-self: center;
	& > span {
	}
	& > span > input {
		font-size: 25px !important;
		width: 100% !important;
		border-radius: 5px !important;
	}
`;
const JoinItem = props => {
	const [range, setRange] = useState(props.defaultValue);
	const changeRange = e => {
		const value = parseInt(e.target.value, 10);
		setRange(value);
	};

	const increase = () => {
		if (range < props.max) {
			let newRange = range;
			newRange++;
			setRange(newRange);
		}
	};
	const decrease = () => {
		if (range > props.min) {
			let newRange = range;
			newRange--;
			setRange(newRange);
		}
	};

	return (
		<Grid line={props.line}>
			<StyledNumPad>
				<NumPad.Number
					onChange={value => {
						if (props.max > value && value > props.min) {
							setRange(value);
						}
					}}
					value={range}
					position={'startBottomRight'}
				></NumPad.Number>
			</StyledNumPad>
			<StyleJoint width={props.width}>
				{props.picture}
			</StyleJoint>
			<TextOverride>{props.text}</TextOverride>
			<Range
				type='range'
				min={props.min}
				max={props.max}
				value={range}
				onChange={changeRange}
			></Range>
			<BtMinus
				icon='minus'
				onMouseDown={decrease}
				// onMouseUp={stopTimer} onMouseOut={stopTimer}
			></BtMinus>
			<BtPlus
				icon='add'
				onMouseDown={increase}
				// onMouseUp={stopTimer} onMouseOut={stopTimer}
			></BtPlus>
		</Grid>
	);
};
export default JoinItem;
