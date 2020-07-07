/** @format */

import React from "react";
import { contacts } from "../contacts";
import Avatar from "./Avatar.jsx";
import Detail from "./Detail.jsx";

export function Card(props) {
	return (
		<div className='card'>
			<div className='top'>
				<h2 className='name'>{props.name}</h2>
				<Avatar imgURL={props.imgURL} />
			</div>
			<div className='bottom'>
				<Detail info={props.phone} />
				<Detail info={props.email} />
			</div>
		</div>
	);
}

export default function createCard(myContact) {
	return (
		<Card
			id={myContact.key}
			key={myContact.key}
			name={myContact.name}
			imgURL={myContact.imgURL}
			phone={myContact.phone}
			email={myContact.email}
		/>
	);
}
