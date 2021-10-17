import { Lift } from "./component/Lift";
import { Navbar } from "./component/Navbar";
import { Title } from "./component/Title";
import { LiftedProvider } from "./context/LiftedContext";

function App() {
	return (
		<div className='App'>
			<Title />
			<Navbar />
			<div className='lifts-container'>
				<LiftedProvider>
					<Lift title={"squat"} />
					<Lift title={"bench"} />
					<Lift title={"deadlift"} />
				</LiftedProvider>
			</div>
			<footer className='footer'>
				<button style={{ width: "50%" }}>Log</button>
				<button style={{ width: "50%" }}>Graph</button>
			</footer>
		</div>
	);
}

export default App;
