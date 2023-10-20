import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<FirstPage/>} />
          <Route path='/section2' element={<SecondPage/>}/>
          <Route path='/section3' element={<ThirdPage/>}/>
          <Route path='/details' element={<DisplayData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
