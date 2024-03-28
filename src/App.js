import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/Signin';

function App() {
  return (
    <Router>
    <div className="container">
      <header className="homepage__header">
        <h1>Header</h1>
      </header>
      <div className="homepage__body">
      <h1 className='homepage__title'>Affordable Homes</h1> 
      <input type="text" className="search__bar" placeholder="Enter a neighborhood or ZIP code" />
      <Link to="/signin">Sign In</Link>

      <Routes>
          <Route path="/" element={<div>Home Page Content</div>} />  {/* Replace with your homepage content */}
          <Route path="/signin" element={<SignIn />} />  {/* SignIn component for login */}
        </Routes>

      </div>
    </div>
    </Router>



  );
}


export default App;
