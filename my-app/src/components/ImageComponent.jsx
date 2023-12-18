import React, { Component } from "react"; // ricordati { Component } per i componenti classe

class ImageComponent extends Component {
	// Component è la superclasse che viene estesa da ImageComponent
	render() {
		const { src, alt, linkUrl } = this.props;

		return (
			<a href={linkUrl} target="_blank" rel="noopener noreferrer">
				<img src={src} alt={alt} />
			</a>
		);
	}
}

export default ImageComponent;
