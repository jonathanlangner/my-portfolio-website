import { Fragment } from "react";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import SocialMediaContainer from "../components/SocialMediaContainer";
import Learning from "../images/learning.png";
import Progress from "../images/progress.jpg";
import Level from "../images/next-level.jpg";
import { Link } from "react-router-dom";

const BlogDoc = function () {
  return (
    <Fragment>
      <div className="container">
        <div className="row">

        <section
            className="mt-5 blog-articles"
            title="Getting to the Next Level in Programming"
          >
            <Link to="/next-level" className="blog-post" href="next-level.html">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top link-img"
                  src={Level}
                  alt="Progress and Goals Overtime"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Getting to the Next Level in Programming <br></br>(3
                    Minute Read){" "}
                    <span className=" m-3 date">
                      <time dateTime="2022-09-23"> 23 September 2022</time>
                    </span>
                  </h5>
                  <p className="card-text">
                    What skills do you need to be studying and using to improve as a programmer?
                  </p>
                </div>
              </div>
            </Link>
          </section>
          <section
            className="mt-5 blog-articles"
            title="8 Programming Misconceptions"
          >
            <Link to="/programming-misconceptions" className="blog-post" href="programming-misconceptions.html">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top link-img"
                  src={Progress}
                  alt="Eight Stones of Increasing Size"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    8 Misconceptions People Have About Programming <br></br>(5
                    Minute Read){" "}
                    <span className=" m-3 date">
                      <time dateTime="2022-04-11"> 11 April 2022</time>
                    </span>
                  </h5>
                  <p className="card-text">
                  This article is written for those who want to begin programming and describes a few common misconceptions you will find within the industry.
                  </p>
                </div>
              </div>
            </Link>
          </section>
          <section
            className="mt-5 blog-articles"
            title="How to Begin Daily Learning"
          >
            <Link to="/how-to-begin-daily-learning" className="blog-post"  href="how-to-begin-daily-learning.html">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top link-img"
                  src={Learning}
                  alt="Computer with Progress Graph"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    How to Begin Daily Learning <br></br>(3 Minute Read){" "}
                    <span className=" m-3 date">
                      <time dateTime="2021-12-27"> 27 Dec 2021</time>
                    </span>
                  </h5>
                  <p className="card-text">
                    This article answers the questions you may have about beginning your active learning journey.
                  </p>
                </div>
              </div>
            </Link>
          </section>
          <hr className="mt-3"></hr>
          <SocialMediaContainer></SocialMediaContainer>
          {/* <BuyMeACoffeeMobile></BuyMeACoffeeMobile> */}
          </div>
        </div>
    </Fragment>
  );
};

export default BlogDoc;
