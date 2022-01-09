import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import Contact from './component/Contact';
import Home from './component/Home';
import Student from './component/Student';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Student" element={<Student />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
