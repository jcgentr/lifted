import { useState } from "react";
import { useLifted, LiftSetType } from "../context/LiftedContext";

interface Props {
	title: string;
}

const defaultSet = { reps: 5, weight: 225 };
const reps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Lift = ({ title }: Props) => {
	const { state, dispatch } = useLifted();
	const [liftSets, setLiftSets] = useState<LiftSetType[]>([
		{ ...defaultSet },
		{ ...defaultSet },
		{ ...defaultSet },
	]);

	const handleChange = (
		event: any,
		index: number,
		property: "reps" | "weight"
	) => {
		const copyOfLiftSets = [...liftSets];
		copyOfLiftSets[index][property] = Number(event.target.value);
		setLiftSets(copyOfLiftSets);
	};

	const handleSave = () => {
		dispatch({ type: "addOrUpdateLift", payload: { title, sets: liftSets } });
		window.localStorage.setItem(
			state.date.toDateString(),
			JSON.stringify(state.lifts)
		);
	};

	return (
		<div className='lift-container'>
			<h2 className='lift-title'>{title.toUpperCase()}</h2>
			{liftSets.map((liftSet: LiftSetType, index: number) => (
				<div key={index} className='lift-set'>
					<select
						value={liftSet.reps}
						onChange={(e) => handleChange(e, index, "reps")}
						name='reps'
						id='reps'
					>
						{reps.map((rep: number, index: number) => (
							<option key={index} value={rep}>
								{rep}
							</option>
						))}
					</select>{" "}
					reps
					<input
						value={liftSet.weight}
						onChange={(e) => handleChange(e, index, "weight")}
						type='number'
						id='weight'
						name='weight'
						min='0'
						max='1000'
					/>{" "}
					lbs
				</div>
			))}
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<button onClick={handleSave}>Save</button>
			</div>
		</div>
	);
};
