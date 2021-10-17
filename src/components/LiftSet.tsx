interface Props {}

const reps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LiftSet = (props: Props) => {
	return (
		<div className='lift-sets'>
			<select name='reps' id='reps'>
				{reps.map((rep) => (
					<option value={rep}>{rep}</option>
				))}
			</select>{" "}
			reps
			<input type='number' id='weight' name='weight' min='0' max='1000' /> lbs
		</div>
	);
};
