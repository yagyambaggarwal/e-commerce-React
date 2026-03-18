import './App.css'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import {Link, Route, Routes} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import AuthProvider from './context/AuthContext';

function App() {

  return (  

    <AuthProvider>
      
        <div className='app'>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/auth' element={<Auth />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/products/:id' element={< ProductDetails />}/>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>

      </AuthProvider>  
      )
}

export default App
