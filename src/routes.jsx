import App from './App';
import Profile from './Profile';
import ErrorPage from './ErrorPage';
import DefaultProfile from './DefaultProfile';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/profile',
		element: <DefaultProfile />,
	},
	{
		path: 'profile/:name',
		element: <Profile />,
	},
];

export default routes;
