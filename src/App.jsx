import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='font-roboto'>
      <AppRoutes/>
      <Toaster/>
    </div>
  );
}

export default App;
