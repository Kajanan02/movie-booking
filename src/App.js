import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/" element={<Home/>}/>

     </Routes>
    </>
  );
}

export default App;
