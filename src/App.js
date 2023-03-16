import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import HealthComponent from "./components/HealthComponent";
import SportsComponent from "./components/SportsComponent";
import BusinessComponent from "./components/BusinessComponent";
import TechnologyComponent from "./components/TechnologyComponent";
import EntertainmentComponent from "./components/EntertainmentComponent";
import PoliticsComponent from "./components/PoliticsComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeComponent />}></Route>
          <Route path="/health" exact element={<HealthComponent />}></Route>
          <Route path="/sports" exact element={<SportsComponent />}></Route>
          <Route path="/business" exact element={<BusinessComponent />}></Route>
          <Route
            path="/technology"
            exact
            element={<TechnologyComponent />}
          ></Route>
          <Route
            path="/entertainment"
            exact
            element={<EntertainmentComponent />}
          ></Route>
          <Route path="/politics" exact element={<PoliticsComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//api key: d91a48e15e2b4175bfadc1be7afc263f
