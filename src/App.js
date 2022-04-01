import logo from './logo.svg';
import './App.css';
import SignIn from './Components/WelcomePage/SignIn';
import SignUp from './Components/WelcomePage/SignUp';
import AddProduct from './Components/AddProduct/addProduct';
import { Fragment } from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {

  return <Fragment>
    <Routes>
    <Route path='/signin' element = {<SignIn/>}/>
    <Route path='/signup' element = {<SignUp/>}/>
    <Route path='/addProduct' element = {<AddProduct/>}/>

    </Routes>
  </Fragment>
}

export default App;
