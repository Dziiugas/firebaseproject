import Login from "../login/Login";
import Register from "../register/Register";
import Page from "../page/Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-bootstrap'
function App() {
  return (
    <>
    <Router>

    <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="/page" element={<Page/>}/>
          

    </Routes>
    </Router>

    </>
  );
}

export default App;
