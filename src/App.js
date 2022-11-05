import './App.css';
import { Routes,Route } from 'react-router-dom';
import Profile from './componets/Profile';
import LinksPage from './componets/LinksPage';
import SocialSection from './componets/SocialSection';
import Footer from './componets/Footer';
import Contact from './componets/Contact';

function App() {
  return(
  <div>
    <Profile/>
    <LinksPage/> 
    <Routes>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
  
    <SocialSection/>
    <Footer/>
  </div>
  )
}

export default App;
 