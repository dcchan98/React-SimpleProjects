/** @format */

import React, { useState } from "react";

function InputArea(props) {
	const [inputText, setInputText] = useState("");

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}
	return (
		<div className='form'>
			<input onChange={handleChange} type='text' value={inputText} />
			<button
				// To pass arguments to parent class. Ie Adding item into Array in App
				onClick={() => {
					props.addItem(inputText);
					setInputText("");
				}}>
				<span>Add</span>
			</button>
		</div>
	);
}

export default InputArea;
