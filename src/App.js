import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddItem from './Pages/AddItem/AddItem';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import ProductDetail from './Pages/Home/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Inventory from './Pages/Home/Inventory/Inventory';
import MyProduct from './Pages/MyProduct/MyProduct';
import Blogs from './Pages/Blogs/Blogs';
import ForgetPassword from './Pages/Login/ForgetPassword/ForgetPassword';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        {/* <Route path='/inventory' element={<Inventory></Inventory>}></Route> */}
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myProduct' element={<MyProduct></MyProduct>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
