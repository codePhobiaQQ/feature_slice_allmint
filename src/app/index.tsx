import { Routing } from 'pages';
import { withProviders } from './providers';

//Styles
import './styles/index.css';
import './styles/global.sass';
// import './styles/components/index.scss';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
