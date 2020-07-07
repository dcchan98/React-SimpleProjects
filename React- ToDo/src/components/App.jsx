/** @format */

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
	const [items, setItems] = useState([]);

	function addItem(inputText) {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
	}

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className='container'>
			<div className='heading'>
				<h1>My List</h1>
			</div>
			<p>Click item to delete</p>
			<InputArea
				// gives children the method as a prop so they can call it
				addItem={addItem}
			/>
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<ToDoItem
							key={index}
							id={index}
							text={todoItem}
							// gives children the method as a prop so they can call it
							onChecked={deleteItem}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
