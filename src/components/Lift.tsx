import { LiftSet } from "./LiftSet";

interface Props {
	title: string;
}

export const Lift = ({ title }: Props) => {
	return (
		<div className='lift-container'>
			<h2 className='lift-title'>{title.toUpperCase()}</h2>
			<LiftSet />
			<LiftSet />
			<LiftSet />
		</div>
	);
};
