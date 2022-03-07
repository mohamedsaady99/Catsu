import 'antd/dist/antd.css';
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Breeds from './components/breeds/breeds';
import Litter from './components/litter/litter';
import Food from './components/food/food';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import Gallary from './components/gallary/gallary';
import UserContextProvider from './context/userContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/profile/profile';



function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

function Home() {
  return (
    <>

      <Header />
      <About />
      <Breeds />
      <Food />
      <Litter />
      <Gallary />
      <Contact />
      <Footer />
    </>
  )
}
export default App;