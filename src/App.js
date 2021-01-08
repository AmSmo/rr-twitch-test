import './App.css';
import {Switch, Route} from 'react-router-dom'
import Base from './Base'
import Test1 from './Test1'
function App() {
  return (
    <Switch>
      <Route path='/test1' component={Test1} />
      <Route path='/' component={Base} />
    </Switch>
  );
}

export default App;
