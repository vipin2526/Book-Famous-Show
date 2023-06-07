import './App.css';
import Detail from './components/Detail';
import Tranding from './components/Tranding';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import Bookshow from './components/bookticket';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Tranding />} />
          <Route path='/aboutshow' element={<Detail />} />
          <Route path='/bookshow' element={<Bookshow />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
