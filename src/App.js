// import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Banner from './components/Banner';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Banner />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
