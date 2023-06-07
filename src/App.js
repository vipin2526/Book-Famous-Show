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
          <Route path='Book-Famous-Show/aboutshow' element={<Detail />} />
          <Route path='Book-Famous-Show/bookshow' element={<Bookshow />} />
          <Route path='Book-Famous-Show/' element={<Tranding />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
