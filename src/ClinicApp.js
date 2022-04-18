import 'bulma/css/bulma.css'
import "@fortawesome/fontawesome-free/js/all"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Dentist } from './pages/Dentist'
import { Patient } from './pages/Patient'
import { Turn } from './pages/Turn'


console.log("hola")

export const ClinicApp = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/dentist" component={Dentist} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/turn" component={Turn} />
        </Switch>
      </Router>
  )
}
