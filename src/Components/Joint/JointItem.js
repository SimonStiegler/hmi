import React, { useState, useGlobal } from 'reactn';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
const Grid = styled.div`
	display: grid;
	grid-template-rows: 55px 30px;
	grid-template-columns: 70px 35px 145px 10px 1fr 35px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 10px;
	border-bottom: solid 1px white;
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
	&::-moz-range-thumb {
		width: 22px;
		height: 25px;
		border-radius: 10px;
		background: #173789;
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
const SetOverride = styled(Button)`
	grid-area: SetJoint;
	align-self: stretch;
	height: 30px;
	padding: 0px !important;
	align-self: center;
	font-size: 30px !important;
	margin: 0px !important;
`;
const StyleJoint = styled.div`
	grid-area: J1;
	& > svg {
		height: 100px;
		width: 50px;
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
			const newRange = range + 1;
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
		<Grid>
			<StyleJoint>{props.picture}</StyleJoint>
			<TextOverride>{props.text}</TextOverride>
			<SetOverride>{range}</SetOverride>
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
