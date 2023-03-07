import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import Menu from './components/Menu';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
