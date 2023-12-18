/* COMPONENTE A FUNZIONE */

import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
	return (
		<button className="cheers-button" style={props.style}>
			{props.buttonText}
		</button>
	);
};

export default ButtonComponent;
