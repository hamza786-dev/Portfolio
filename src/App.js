import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import "./Components/Navbar.css"
import Hero from './Hero';
import "./Hero.css"
import About from './About';
import "./About.css"
import Services from './Services';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from './Footer';
import GetData from './GetData';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='Portfolio' element={<Portfolio/>}/>
          <Route path='/Contact' element={<Footer/>}/>
          <Route path='/msg' element={<GetData/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import React from 'react'
// import { useGoogleLogin } from '@react-oauth/google';

// const App = () => {
//   const login = useGoogleLogin({
//     onSuccess: tokenResponse => console.log(tokenResponse),
//   });
//   return (
//     <div>
// <button onClick={() => login()}>Sign in with Google 🚀</button>;
      
//     </div>
//   )
// }

// export default App




