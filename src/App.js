import "./App.scss";
import SecondTeam from "./components/SecondTeam/SecondTeam";
import TeamIntro from "./components/FirstTeam/FirstTeam";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThirdIntro from "./components/ThirdTeam/ThirdTeam";
import Contact from "./components/ContactUs/Contact";
import NavigationMenu from "./components/Navigation/NavigationMenu";

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route exact path='/' element={<TeamIntro />} />
        <Route exact path='/Team1' element={<TeamIntro />} />
        <Route path='/Team2' element={<SecondTeam />} />
        <Route path='/Team3' element={<ThirdIntro />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/navigation' element={<NavigationMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
