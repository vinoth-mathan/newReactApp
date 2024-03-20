// import Login from './Login';
// import Register from './components/Register';
// import Sample from './components/sample';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbara from './components/navbar/Navbara';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Useeft from './components/hooks/Useeft';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DisplayCart from './components/context/DisplayCart';

// import Reducer from './components/hooks/Reducer';
// import Crtwb from './components/example/Crtwb';


const App = () => {

  return (
    // <>
    // <Reducer/>
    // <Crtwb/> 
    // </> 
      <>
        <BrowserRouter>
      <Navbara />
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/login' element={<Login /> }/>
      <Route path='/register' element={<Register />} /> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/api' element={<Useeft/>} />
      <Route path='/display' element={ <DisplayCart/>}/>
    </Routes>
   </BrowserRouter>
      </>
  )
}

export default App


