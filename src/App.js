import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Otp from './Components/auth/Otp';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup /> }/>
            <Route path='/login' element={<Login />} />
            <Route path='/otp' element={<Otp />}/>
            <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
