import React from "react";

const ParagraphComponent = (props) => {
	return <p style={props.style}>{props.text}</p>;
};

export default ParagraphComponent;
