import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appcontainer from './container/appcontainer';
import "./style/scss/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<Appcontainer />} />
      </Routes>
    </Router>

  );
}

export default App;
