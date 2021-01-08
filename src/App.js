import './App.css';
import {Switch, Route} from 'react-router-dom'
import Base from './Base'
import Test1 from './Test1'
import Iframe from './Iframe'
import Both from './Both'
function App() {
  return (
    <Switch>
      <Route path='/test1' component={Test1} />
      <Route path='/iframe' component={Iframe} />
      <Route path='/both' component={Both} />
      <Route path='/' component={Base} />
    </Switch>
  );
}

export default App;
