import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
