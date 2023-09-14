import "./App.scss";
import SecondTeam from "./components/SecondTeam/SecondTeam";
import TeamIntro from "./components/TeamIntro/TeamIntro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThirdIntro from "./components/ThirdIntro/ThirdIntro";
import Contact from "./components/ContactUs/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<TeamIntro />} />
          <Route path='/2nd' element={<SecondTeam />} />
          <Route path='/3rd' element={<ThirdIntro />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
