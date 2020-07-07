/** @format */

import React from "react";

function ToDoItem(props) {
	return (
		<div

    // calls a function that calls onChecked ie deleteItem(props.id)
    // wrapped in an arrow so we can pass a property
			onClick={() => {
				props.onChecked(props.id);
			}}>
			<li>{props.text}</li>
		</div>
	);
}

export default ToDoItem;
