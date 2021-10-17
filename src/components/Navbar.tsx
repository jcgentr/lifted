interface Props {}

export const Navbar = (props: Props) => {
	const todaysDate = new Date().toDateString();
	return (
		<div className='nav-bar'>
			<div>
				<button>⬅️</button>
			</div>
			<div>
				<h3>{todaysDate}</h3>
			</div>
			<div>
				<button>➡️</button>
			</div>
		</div>
	);
};
