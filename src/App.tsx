import { Lift } from "./components/Lift";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";

function App() {
	return (
		<div className='App'>
			<Title />
			<Navbar />
			<div className='lifts-container'>
				<Lift title={"squat"} />
				<Lift title={"bench"} />
				<Lift title={"deadlift"} />
			</div>
			<footer className='footer'>
				<button style={{ width: "50%" }}>Log</button>
				<button style={{ width: "50%" }}>Graph</button>
			</footer>
		</div>
	);
}

export default App;
