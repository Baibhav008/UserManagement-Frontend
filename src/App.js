
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { HashRouter,Route,Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';


function App() {
  return (
    <div className="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateStudent/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>
          <Route path="/edit-student/:id" element={<EditStudent/>}/>
          
        </Routes>
      </HashRouter>

      
     
    </div>
  );
}

export default App;
