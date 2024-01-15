import Login from "../login/Login";
import Register from "../register/Register";
import Page from "../page/Page";
import Holiday from "../holiday/Holiday";
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
          <Route path="/holiday" element={<Holiday/>}/>
          

    </Routes>
    </Router>

    </>
  );
}

export default App;
