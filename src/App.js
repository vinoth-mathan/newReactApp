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
import { useState } from 'react';
import userContext from './components/context/Context';

// import Reducer from './components/hooks/Reducer';
// import Crtwb from './components/example/Crtwb';





const App = () => {
  const [search ,setSearch] = useState('')
  const [user,setUser]=useState([])  
  const [value , setValue] = useState('')

  return (
      <>
        <BrowserRouter>
        <userContext.Provider value={{user,setUser,value,setValue,search,setSearch}}>
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
    </userContext.Provider>
   </BrowserRouter>
      </>
  )
}

export default App


