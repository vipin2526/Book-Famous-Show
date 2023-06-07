import './App.css';
import Detail from './components/Detail';
import Tranding from './components/Tranding';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookshow from './components/bookticket';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='Book-Famous-Show/' element={<Tranding />} />
          <Route path='/aboutshow' element={<Detail />} />
          <Route path='/bookshow' element={<Bookshow />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
