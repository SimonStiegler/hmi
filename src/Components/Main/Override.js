import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Grid = styled.div`
	display: grid;
	grid-template-rows: 55px 30px;
	grid-template-columns: 35px 145px 10px 1fr 35px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 10px;
	border-bottom: solid 1px white;
	grid-template-areas:
		'. Override . SetOverride . '
		' BtMinus Range Range Range BtPlus  ';
`;
const TextOverride = styled.p`
	font-size: 30px !important;
	margin-bottom: 15px !important;
	height: 30px;
	align-self: center;
	text-align: right;
	justify-self: stretch;
	grid-area: Override;
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
const SetOverride = styled(Button)`
	grid-area: SetOverride;
	align-self: stretch;
	height: 30px;
	padding: 0px !important;
	align-self: center;
	font-size: 30px !important;
	margin: 0px !important;
`;
const time = 300;
const Override = () => {
	const [range, setRange] = useState(50);
	const changeRange = e => {
		const value = parseInt(e.target.value, 10);
		setRange(value);
	};

	const increase = () => {
		if (range < 100) {
			const newRange = range + 1;
			setRange(newRange);
		}
	};
	const decrease = () => {
		if (range > 0) {
			let newRange = range;
			newRange--;
			setRange(newRange);
		}
	};
	// 	const increaseTimer = setInterval(increase,time)
	// const decreaseTimer = setInterval(decrease,time)
	// const stopTimer =()=> {
	// 	clearInterval(increaseTimer);
	// 	clearInterval(decreaseTimer)
	// }
	return (
		<Grid>
			<TextOverride>Override:</TextOverride>
			<SetOverride>{range}</SetOverride>
			<Range
				type='range'
				min='0'
				max='100'
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
export default Override;
