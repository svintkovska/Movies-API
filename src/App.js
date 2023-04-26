import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import './App.css';
import Home from './Home';
import ContactUs from './ConstactUs';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Movies';
import './css/common.css'
import './css/contact.css'
import './css/gallery.css'
import './css/responsive.css'
import './css/style.css'
import './css/teams.css'
import './css/testimonials.css'
import './css/orderCall.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='contactus' element={<ContactUs />}/>
      <Route path='aboutus' element={<AboutUs />}/>
      <Route path='testimonials' element={<Testimonials />}/>
      <Route path='movies' element={<Movies />}/>
    </Routes>   
  </BrowserRouter>
  );
}

export default App;
