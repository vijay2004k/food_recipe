//import logo from './logo.svg';
import './App.css';
import Mainpage from './component/Mainpage';
import { Route, Routes } from "react-router-dom"
import Mealinfo from './component/Mealinfo';

function App() {
  return (
    <>
      {/*<Mainpage />*/}
      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
        <Route path='/:mealid' element={<Mealinfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
