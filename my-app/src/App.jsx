// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import ParagraphComponent from "./components/ParagraphComponent";
import "./components/ButtonComponent.css";
/* ------------------------------------------------------ */

function App() {
	/* stile btn customizzato dinamicamente */
	const btnCustom = {
		backgroundColor: "#FF8C11",
		color: "#000",
		fontWeight: "bold",
		fontSize: "1.2rem",
		padding: "12px 24px",
		marginTop: "2rem",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	};

	const imgUrl =
		"https://cdn.costumewall.com/wp-content/uploads/2019/08/jane-lane.jpg";

	const imgAlt = "Jane Lane";
	const linkUrl = "https://daria.fandom.com/wiki/Jane_Lane";

	return (
		<div className="App">
			<header className="App-header">
				<ParagraphComponent
					text="This is Jane Lane from Daria! Click the image above!"
					style={{
						fontSize: "1.5rem",
						color: "black",
						backgroundColor: "#FF8C11",
						padding: "1.5rem",
						borderRadius: "5px",
					}}
				/>
				<ImageComponent src={imgUrl} alt={imgAlt} linkUrl={linkUrl} />
				<ButtonComponent buttonText="Cheers!" style={btnCustom} />
			</header>
		</div>
	);
}

export default App;
