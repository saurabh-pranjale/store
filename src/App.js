

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from './components/Login';
import Private from './components/Private';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/user' element={<Private />}>
            <Route path='dashboard' element={<Dashboard />} />
       
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
