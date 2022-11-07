import "./css/App.scss";
import "./css/common.scss";
import "./css/bootstrap-access-tool.scss";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Fragment, useEffect} from "react";
import BlogDoc from "./pages/BlogDoc.jsx";
import { HowToBeginDailyLearningDoc } from "./pages/HowToBeginDailyLearningDoc";
import { ProgrammingMisconceptionsDoc } from "./pages/ProgrammingMisconceptions";
import NavBar from "./components/NavBar";
import PageNotFound from "./404Page";
import HomeDoc from "./pages/Home";
import PortfolioDoc from "./pages/PortFolioDoc";
import { NextLevelDoc } from "./pages/StartingProgramming";


const App = function () {

  return (
    <section className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/blog" element={<Blog  />} />
                <Route exact path="/how-to-begin-daily-learning" element={<HowToBeginDailyLearning/>}/>
                <Route exact path="/programming-misconceptions" element={<ProgrammingMisconceptions/>}/>
                <Route exact path="/next-level" element={<NextLevel/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
    </section>
  );
};

const Home = function () {
  useEffect(() => {   
    document.title = "jonathanlangner.me";
    }, []);
  return (
    <Fragment>
      <NavBar currentState={0}/>
      <HomeDoc />
    </Fragment>
  );
};

const Portfolio = function () {
  useEffect(() => {   
    document.title = "Portfolio | jonathanlangner.me";
    }, []);
  return (
    <Fragment>
      <NavBar currentState={1}/>
      <PortfolioDoc />
    </Fragment>
  );
};

const Blog = function(){
  useEffect(() => {   
    document.title = "Blog | jonathanlangner.me";
    }, []);
  return(
    <Fragment>
         <NavBar currentState={2}/>
        <BlogDoc/>
    </Fragment>
  );
};

const HowToBeginDailyLearning = function(){
  useEffect(() => {   
    document.title = "Beginning Daily Learning | jonathanlangner.me";
    }, []);
  return(
    <Fragment>
       <NavBar currentState={2}/>
      <HowToBeginDailyLearningDoc />
    </Fragment>
  );
}

const ProgrammingMisconceptions = function(){
  useEffect(() => {   
    document.title = "Programming Misconceptions | jonathanlangner.me";
    }, []);
  return(
    <Fragment>
      <NavBar currentState={2}/>
      <ProgrammingMisconceptionsDoc />
    </Fragment>
  );
}

const NextLevel = function(){
  useEffect(() => {   
    document.title = "Next Level | jonathanlangner.me";
    }, []);
  return(
    <Fragment>
      <NavBar currentState={2}/>
      <NextLevelDoc />
    </Fragment>
  );
}


export default App;
