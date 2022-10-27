import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Hotspot from '../pages/Hotspot';
import Recommend from '../pages/Recommend';
import Sociology from '../pages/Sociology'
import Amusement from '../pages/Amusement'
import Technology from '../pages/Technology'
import Military from '../pages/Military'
import Sports from '../pages/Sports'
import Automobile from '../pages/Automobile'
import Register from '../pages/Register'
import Details from '../pages/Details';

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='/' element={<Recommend/>}></Route>
        <Route path='/hotspot' element={<Hotspot />}></Route>
        <Route path='/recommend' element={<Recommend />}></Route>
        <Route path='/sociology' element={<Sociology />}></Route>
        <Route path='/amusement' element={<Amusement />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
        <Route path='/military' element={<Military />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
        <Route path='/automobile' element={<Automobile />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter;