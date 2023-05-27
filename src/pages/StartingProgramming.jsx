import { Link } from "react-router-dom";
import Learning from "../images/learning.png";
import Progress from "../images/progress.jpg";
import Level from "../images/next-level.jpg";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import SocialMediaContainer from "../components/SocialMediaContainer";

export const NextLevelDoc = function(){

    return(
                <div className="full-page">
                    <div className="container">
                        <div className="row">
                            <article className="current-article color-acc-white mt-lg-5 mb-lg-5">
                            <h3 className="current-article-title mt-xxl-5">Getting to the Next Level in Programming</h3>
                            <h5 className="card-title">Author: &#10004;Jonathan Langner</h5>
                            <h5 className="card-title">Date Posted: &#128337; <time dateTime="2022-9-23"> 23 September 2022</time></h5>
                            <img className="article-img" src={Level} alt="Computer with Progress Graph"></img>
                            <hr></hr>
                               <h3>Throughout your programming journey, you have probably heard many things you need.
                                    Some examples include more languages, fewer languages, and the most popular or latest ideas or technologies.  
                               </h3>
                               <hr></hr>
                                <h3 className="mt-3">So what do you really need to get to the next level of programming?</h3>
                                <ul>
                                    <li className="mt-3">You may not need to learn more languages. Instead, You need a skill set that is transferable and relevant to programming or design projects within the industry.
                                    </li>
                                    <li className="mt-3">You require a fundamental building block to help solve real-world problems. 
                                    </li>
                                    <li className="mt-3"> This is where Data Structures and Algorithms come in. 
                                    </li>
                                </ul>
                                <hr></hr>
                                <h3 className="mt-3">🗂 Why Data Structures?</h3>
                                <ul>
                                    <li className="mt-3">Data Structures are a crucial building block for managing data in applications. </li>
                                    <li className="mt-3"> Data Types Include: Linked Lists, Binary Trees, Graphs, and Stacks to name a few. </li>
                                    <li className="mt-3"> Learning and knowing Data Structures by heart is necessary because without those: applications, designs, and programs cannot be created or will not function well enough to compete in the real world.  </li>
                                    <li className="mt-3"> To become an effective developer: you require Data Structures to get your skills to the next level. <br></br>For the basics of starting Data Structures see:  <a href="https://www.geeksforgeeks.org/data-structures/?ref=shm">GeeksForGeeks Data Structures</a> and <a href="https://www.linkedin.com/learning/programming-foundations-data-structures-2/understand-data-structures?autoplay=true">Linkedin Learning Data Structures </a></li>    
                                </ul>
                                <hr></hr>
                                <h3 className="mt-3">📊 Why Algorithms?</h3>
                                <ul>
                                    <li className="mt-3">Algorithms teach you to think as a programmer, and they add real metrics, reason, and depth to your overall designs and projects.
                                    Additionally: Algorithms help you not need to "reinvent the wheel" or to solve problems that have already been solved.
                                    </li>
                                    <li> A Few Categories of Algorithms Include: Searching, Sorting, Divide and Conquer, Recursive, Backtracking, and Hashing.</li>
                                    <li className="mt-3">As you learn Algorithms, you will also learn to measure the time cost of more complex processes in programming, and you will be able to evaluate flaws in your reasoning and designs.</li>
                                    <li className="mt-3">You will need to learn Data Structures before you start learning Algorithms. The reason is: Most algorithms involve understanding and using Data Structures.</li>
                                    <li className="mt-3"> For more information on Algorithms: <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/?ref=ghm">GeeksForGeeks Algorithms</a> and <a href="https://www.linkedin.com/learning/programming-foundations-algorithms/algorithms-power-the-world?autoplay=true">Linkedin Learning Algorithms </a> </li>
                                    <li className="mt-3"> For practicing problem-solving with either Data Structures or Algorithms: <a href="https://leetcode.com/">LeetCode</a></li>
                                </ul>
                                <hr></hr>
                                <h4 className="mt-3">Summing it up: You need Data Structures and Algorithms to reach the next level of programming. Begin with Data Structures, and then learn Algorithms.</h4>
                                <hr></hr>
                                <h2 className="mt-5 text-center">Recommended Articles: </h2>
                                <section className="mt-1 blog-articles" title="8 Programming Misconceptions">
                                    <section className="mt-5 blog-articles">
                                        <Link to="/programming-misconceptions" className="blog-post" href="programming-misconceptions.html">
                                        <div className="card" style={{width: "100%"}}>
                                            <img className="card-img-top link-img" src={Progress} alt="Eight Stones of Increasing Size"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">8 Misconceptions People Have About Programming <br></br>(5 Minute Read) <span className=" m-3 date"><time dateTime="2022-04-11"> 11 April 2022</time></span></h5>
                                            <p className="card-text">
                                            This article is written for those who want to begin programming and describes a few common misconceptions you will find within the industry.
                                            </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </section>
                                </section>
                                <section className="mt-1 blog-articles" title="How to Begin Daily Learning">
                                <section className="mt-5 blog-articles">
                                    <Link to="/how-to-begin-daily-learning" className="blog-post" href="how-to-begin-daily-learning.html" >
                                    <div className="card" style={{width: "100%"}}>
                                        <img className="card-img-top link-img" src={Learning} alt="Computer with Progress Graph"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">How to Begin Daily Learning <br></br>(3 Minute Read) <span className=" m-3 date"><time dateTime="2021-12-27"> 27 Dec 2021</time></span></h5>
                                        <p className="card-text">
                                        This article answers the questions you may have about beginning your active learning journey.

                                        </p>
                                        </div>
                                    </div>
                                    </Link>
                                </section>
                            </section>   
                            </article>
                            <hr className="mt-3"></hr>
                            <SocialMediaContainer></SocialMediaContainer>
                            {/* <BuyMeACoffeeMobile></BuyMeACoffeeMobile> */}
                        </div>
                    </div>
                </div>
    );


}