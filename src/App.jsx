import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Home } from './views/Home'
import { Waiter } from './views/Waiter'
import { Kitchen } from './views/Kitchen'
import { Navigation } from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (

    <Router>
      <div>
        <header><Navigation /></header>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/waiter" component={Waiter} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App