import SocialMediaContainer from "../components/SocialMediaContainer";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import { Fragment } from "react";
import CodeChallenge1 from "../images/codepen-counter-challenge.png";
import Chess from "../images/Chess.png";
import quickDice from "../images/quick-dice-war.png";
import accessTest from "../images/access-sample.png";

const PortfolioDoc = function () {
  return (
    <Fragment>
      <div className="full-page">
        <div className="container">
         <hr></hr>
         <h1>
         This Portfolio Page is a showcase of some of my favorite projects, and skills.
         </h1>
         <hr></hr>
         <div className="m-3 d-inline-block">
         <h3>Quick Dice War</h3>
        <a href="https://quick-dice-war-334b51.netlify.app" title="Quick Dice Game">
          <img className="pic-mobile"src={quickDice} alt="quick-dice-war"></img>
        </a>
        </div>
        <div className="m-3 d-inline-block">
          <h3>Accessibility Testing</h3>
          <a  className="m-3" href="https://bootstrap-accessibility-test-b2dffa.netlify.app" title="Accessibility Testing">
            <img className="pic-mobile" src={accessTest} alt="access-test"></img>
          </a>
        </div>
        <hr></hr>
        <div className="m-3 d-inline-block">
        <h3>Codepen JS Chess Game Styling</h3>
        <a href="https://codepen.io/jonlangner/pen/WNzoeQv"  title="JS Chess Game">
                    <img className="pic-mobile" src={Chess} alt="JS Chess Game"></img>
        </a>
        </div>
        <div className="m-3 d-inline-block">
        <h3>Codepen Grocery List Styling</h3>
        <a className="mx-1" href="https://codepen.io/jonlangner/pen/rNJZVxG" title="Code Pen Grocery List">
                    <img className="pic-mobile" src={CodeChallenge1} alt="CodePen Challenge 1: A Blocked Grocery List"></img>
        </a>
        </div>
        
          <hr className="mt-5"></hr>
          <div className="mt-5">
                <h3>If you would like to see more samples of my work you can also checkout: <br></br> 
                    <a title="https://github.com/jonathanlangner" href="https://github.com/jonathanlangner">My GitHub</a>
                </h3>
          </div> 
          <hr className="mt-5"></hr>
          <SocialMediaContainer></SocialMediaContainer>
          <BuyMeACoffeeMobile></BuyMeACoffeeMobile>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioDoc;
