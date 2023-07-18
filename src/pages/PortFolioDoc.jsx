import SocialMediaContainer from "../components/SocialMediaContainer";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import { Fragment } from "react";
import DiceyBusiness from "../images/dicey-business.png";
import TicTacToe from "../images/tictactoe.png";
import Chess from "../images/Chess.png";
import quickDice from "../images/quick-dice-war.png";
import accessTest from "../images/access-sample.png";
import intrepidWeather from "../images/intrepid-weather.png"

const PortfolioDoc = function () {
  return (
    <Fragment>
      <div className="full-page">
        <div className="container">
         <hr></hr>
         <h1>
         Projects
         </h1>
         <hr></hr>
         <div className="m-3 d-inline-block">
         
         <div className="m-3 d-inline-block">
          <h3>TicTacToe Game</h3>
          <a  className="m-3" href="https://tictactoe-fbb10f.netlify.app/" title="Accessibility Testing">
            <img className="pic-mobile home-card" src={TicTacToe} alt="TicTacToe"></img>
          </a>
        </div>
        <div className="m-3 d-inline-block">
        <h3>JS Chess Game</h3>
        <a href="https://js-chess-33c20a.netlify.app/"  title="JS Chess Game">
                    <img className="pic-mobile home-card" src={Chess} alt="JS Chess Game"></img>
        </a>
        </div>
        <hr className="mt-5"></hr>
        <div className="m-3 d-inline-block">
        <h3>Dicey Business</h3>
        <a className="mx-1" href="https://dicey-business-82a7a1.netlify.app/" title="Code Pen Grocery List">
                    <img className="pic-mobile home-card"  src={DiceyBusiness} alt="Dicey Business"></img>
        </a>
        </div>
        <div className="m-3 d-inline-block">
         <h3>Intrepid Weather App</h3>
        <a href="https://interprid-weather-alpha.netlify.app" title="Intrepid Weather">
          <img className="pic-mobile home-card" src={intrepidWeather} alt="intrepid-weather"></img>
        </a>
        </div>
         <hr className="mt-5"></hr>
         <div className="m-3 d-inline-block">
         <h3>Quick Dice War</h3>
        <a href="https://quick-dice-war-334b51.netlify.app" title="Quick Dice Game">
          <img className="pic-mobile home-card"src={quickDice} alt="quick-dice-war"></img>
        </a>
        </div>
        <div className="m-3 d-inline-block">
          <h3>Accessibility Testing</h3>
          <a  className="m-3" href="https://bootstrap-accessibility-test-b2dffa.netlify.app" title="Accessibility Testing">
            <img className="pic-mobile home-card" src={accessTest} alt="access-test"></img>
          </a>
        </div>
        </div>
        <hr></hr>
        
          <hr className="mt-5"></hr>
          <div className="mt-5">
                <h3>If you would like to see more samples of my work you can also checkout: <br></br> 
                    <a title="https://github.com/jonathanlangner" href="https://github.com/jonathanlangner">My GitHub</a>
                </h3>
          </div> 
          <hr className="mt-5"></hr>
          <SocialMediaContainer></SocialMediaContainer>
          {/* <BuyMeACoffeeMobile></BuyMeACoffeeMobile> */}
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioDoc;
