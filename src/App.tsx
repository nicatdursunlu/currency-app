import { Router, Switch } from 'react-router-dom'

import 'assets/style/index.scss'
import { Layout } from 'components/layout/Layout'
import history from 'utils/history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Layout />
      </Switch>
    </Router>
  )
}

export default App
