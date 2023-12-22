import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import ShowProduct from './pages/ShowProduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/add' element={<AddProduct />}/>
      <Route path='/product/details/:id' element={<ShowProduct />}/>
      <Route path='product/update/:id' element={<UpdateProduct />}/>
      <Route path='/product/delete/:id' element={<DeleteProduct />}/>
    </Routes>
  );
}

export default App;
