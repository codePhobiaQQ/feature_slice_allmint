import { Routing } from 'pages'
import { withProviders } from './providers'
import './index.css'

const App = () => {
	return (
		<div>
			<Routing />
		</div>
	)
}

export default withProviders(App)
