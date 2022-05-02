import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddItem from './Pages/AddItem/AddItem';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/items' element={}></Route> */}

        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;

/* 
https://ibb.co/68dYwL2
https://ibb.co/3rFppgR
https://ibb.co/vkVHtKz
https://ibb.co/G20NrPt
https://ibb.co/LCmbC90
https://ibb.co/gMz6wzL
*/