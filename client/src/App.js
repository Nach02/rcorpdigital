import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home/home';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
