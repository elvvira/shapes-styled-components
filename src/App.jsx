import CircleOne from './components/circle1/CircleOne';
import CircleTwo from './components/circle2/CircleTwo';
import { ContainerElements } from './components/container/styles';

import SquareTwo from './components/square2/SquareTwo';
import SquareOne from './components/square2/SquareTwo';

const App = () => {
	return (
		<ContainerElements>
			<CircleOne />
			<CircleTwo />
			<SquareOne />
			<SquareTwo />
		</ContainerElements>
	);
};

export default App;
