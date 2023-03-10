import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import Menu from './components/Menu';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <Menu />
          <AppRoutes />
          <ToastContainer />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
