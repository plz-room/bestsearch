// import logo from './logo.svg';
// import './App.css';
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
// import Box from '@mui/material/Box';
// import Header from './component/Header';
// import Mainbody from './component/Mainbody';
import Index from './page/index/index.js';
import List from './page/seach';
import { Route, Routes } from 'react-router-dom';
// import { Rou }

// import List from './page/seach'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/search/:kerword' element={<List />}></Route>
        <Route path='/' element={<Index />}></Route>
      </Routes>
    </div>
  );
}

export default App;
