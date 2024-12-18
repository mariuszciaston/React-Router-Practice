import { Link } from 'react-router-dom';

const DefaultProfile = () => {
	return (
		<div>
			<p>Oh, nothing to see here!</p>

			<Link to='/'>You can go back to the home page by clicking here, though!</Link>
		</div>
	);
};

export default DefaultProfile;
