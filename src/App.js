import "./App.scss";
import SecondTeam from "./components/SecondTeam/SecondTeam";
import TeamIntro from "./components/TeamIntro/TeamIntro";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThirdIntro from "./components/ThirdIntro/ThirdIntro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<TeamIntro />} />
        <Route path='/2nd' element={<SecondTeam />} />
        <Route path='/3rd' element={<ThirdIntro/>} />
        <Route path='/3rd' element={<div>3rd in process</div>} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <TeamIntro />
    //   <SecondTeam />
    // </div>
  );
}

export default App;
