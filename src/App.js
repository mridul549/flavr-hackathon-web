import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup /> }/>
            <Route path='/login' element={<Login />} />
            <Route path='/otp' element={<Otp />}/>
      </Routes>
    </div>
  );
}

export default App;
