import Card from "react-bootstrap/Card";
import "../../App.css";

function Projects(props) {
	const handleClick = () => {
		if (!props.link) return;
		window.open(props.link, "_blank");
	};

	return (
		<Card
			onClick={handleClick}
			className="card-fan-card"
			style={{
				width: "8.75rem",
				height: "12.5rem",
				cursor: props.link ? "pointer" : "default",
				transform: `rotate(${props.rotation}deg)`,
			}}
		>
			<Card.Body>
				<Card.Title>{props.rank_spade}</Card.Title>
				<Card.Subtitle>{props.title}</Card.Subtitle>
			</Card.Body>
		</Card>
	);
}

export default Projects;
