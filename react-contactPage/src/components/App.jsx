/** @format */

import React from "react";
import createCard from "./Card.jsx";
import Avatar from "./Avatar.jsx";
import Heading from "./Heading.jsx";
import { contacts } from "../contacts";

function App() {
	return (
		<div>
			<Heading />
			<Avatar
				imgURL={
					"https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Captain-America-icon.png"
				}
			/>

			{contacts.map((x) => createCard(x))}
		</div>
	);
}

export default App;
