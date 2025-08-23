import Projects from "./Projects";
import "../../App.css";

const ProjectPage = () => {
	const projects = [
		{
			id: 0,
			rank_spade: "3♠",
			title: "About Me",
			description: "placeholder",
			rotation: -15,
		},
		{
			id: 1,
			rank_spade: "3♥",
			title: "About This Website",
			description: "placeholder",
			rotation: -7,
		},
		{
			id: 2,
			rank_spade: "3♣",
			title: "Cangjie Practice Website",
			description: "placeholder",
			rotation: 0,
			link: "https://zeon10902.github.io/cangjie_ex/",
		},
		{
			id: 3,
			rank_spade: "3♦",
			title: "Arduino RFID Application",
			description: "placeholder",
			rotation: 7,
			link: "https://github.com/zeon10902/Arduino_RFID",
		},
		{
			id: 4,
			rank_spade: "4♠",
			title: "To-do List Program",
			description: "placeholder",
			rotation: 15,
			link: "https://github.com/zeon10902/to-do_list",
		},
	];

	return (
		<div className="card-fan-container">
			{projects.map((p) => (
				<Projects key={p.id} {...p} />
			))}
		</div>
	);
};

export default ProjectPage;
