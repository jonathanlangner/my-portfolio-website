import Learning from "../images/learning.png";
import Progress from "../images/progress.jpg";
import Level from "../images/next-level.jpg";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import SocialMediaContainer from "../components/SocialMediaContainer";
import { Link } from "react-router-dom";

export const ProgrammingMisconceptionsDoc = function(){
    return(
        <div className="full-page">
                    <div className="container">
                        <div className="row">
                            <article className="current-article color-acc-white mt-lg-5 mb-lg-5">
                            <h3 className="current-article-title mt-xxl-5">8 Programming Misconceptions</h3>
                            <h5 className="card-title">Author: &#10004;Jonathan Langner</h5>
                            <h5 className="card-title">Date Posted: &#128337; <time dateTime="2022-04-11"> 11 April 2022</time></h5>
                            <img className="article-img" src={Progress} alt="Eight Stones of Increasing Size"></img>
                                <h3>As you begin to learn Programming there are 8 Common Programming Misconceptions you will need to watch out for.</h3>
                            <ul>
                                <li>Understanding these misconceptions will help you have a more clear path on your programming journey.</li>
                            </ul>
                            <h3 className="mt-5"><b>What Are 8 Common Misconceptions Associated With Programming?</b></h3>
                            
                                <p className="h3 mt-5">Misconception 1: Programming is too difficult for you to learn.</p>
                                <p className="mt-5"> <i>Anyone can learn to program provided you have the following:</i> </p>
                                <ul>
                                    <li className="mt-5">A simple understanding of Arithmetic, preferably with a little Algebra.</li>
                                    <li className="mt-5">A desire to consistently learn each day.</li>
                                    <li className="mt-5">A desire to continuously try and have fun with challenging unique puzzles or problems which build your creativity, and problem solving skills.</li> 
                                </ul>
                                <p className="h3 mt-5">Misconception 2: Programming can be learned in a day.</p>
                                <p className="mt-5"><i>There is a reason I emphasize the concept of daily learning. Programming is like learning to read or do math. Dedicated daily effort makes the biggest impact overtime.</i> </p>
                                <ul>
                                    <li className="mt-5">Expect it to take at least roughly 120 days of consistent effort for 30 minutes each day for you to start effectively using the core concepts of programming.</li>
                                    <li className="mt-5">120 days is an estimate, and your starting point may allow you to progress more or less quickly. 
                                        The key is: Strive for daily learning-effort, challenge yourself, and track your learning progress.</li> 
                                </ul>
                            <p className="h3 mt-5">Misconception 3: Programming is only useful for designing applications.</p>
                            <p className="mt-5"><i>Programming is useful for so much more than just writing applications. A few other examples include:</i> </p>
                            <ul>
                                <li className="mt-5">Evaluating Data. This often done for Scientific Research, Business Analysis, and Learning.</li>
                                <li className="mt-5">Solving Real World Problems. Programming can be used to simulate and solve for different real world problems or ideas. </li>
                                <li className="mt-5">Programming is used in combination with machines to do automation. (Computer Numeric Control Machines, and Manufacturing Robotics)</li> 
                                <li className="mt-5">Enhancing your Home. Programming allows you to interact with sensors to better regulate things such as lights, and temperature.</li> 
                            </ul>
                            <p className="h3 mt-5">Misconception 4: Programming is something you can only learn through college.</p>
                            <p className="mt-5"><i>There are many ways to delve into programming besides college. Here are just a few of the many options out there today:</i> </p>
                            <ul>
                                <li className="mt-5"><a href="https://www.codewars.com/">Codewars:</a> Codewars is a website which provides a learning gamification method which helps you practice and improve your problem solving skills. </li>
                                <li className="mt-5"><a href="https://github.com/">Github:</a> Github is a file management system provides many open source examples of real world programming projects, and the possibility to collaborate with others on projects.</li>
                                <li className="mt-5"><a href="https://developer.mozilla.org/en-US/">MDN:</a> MDN teaches quality Web Design, and is exceedingly helpful in setting you on track for a web development career.</li> 
                                <li className="mt-5"><a href="https://www.linkedin.com/learning/">LinkedIn Learning:</a> LinkedIn Learning provides courses which help improve your problem solving skills, as well as helping you to build an online learning presence. </li>
                                <li className="mt-5">Programming Boot Camps provide a fast paced learning environment to get into the programming industry. Not all are good quality, so do your research carefully before signing up. </li>  
                            </ul>
                            <p className="h3 mt-5">Misconception 5: You need to learn all the programming languages.</p>
                            <p className="mt-5"><i>You don't need to learn every single programming language to be a good programmer. </i></p>
                                <ul>
                                    <li className="mt-5">You cannot possibly learn and master all programming languages. </li>
                                    <li className="mt-5">Pick some programming languages that are relevant and actually useful for your design or personal purposes and learn those in-depth. </li>
                                </ul>
                        
                            <p className="h3 mt-5">Misconception 6: You need to learn just one programming language. </p>
                            <p className="mt-5"><i>You should learn more than just one programming language. This will broaden your understanding and it will help you to see the ins and outs of the different programming languages.  
                                Additionally, the more languages you know (have mastered) the more design options you will have available to you.</i> </p>
                            
                            <p className="h3 mt-5">Misconception 7: "Language X is the best language so learn Language X." </p>
                            <p className="mt-5"><i>No programming language is best for absolutely everything. They all have their perks, quirks, and things which make them more or less useful for different designs and tasks.</i> </p>
                            
                            <p className="h3 mt-5">Misconception 8: Programming can solve all problems.</p>
                            <p className="mt-5"><i>Programming is a useful, and it is a highly effective tool for doing many things. It is still just a tool however, and it will not solve all your life problems and tasks for you. That said: programming is a tool which is still well worth learning and utilizing.  </i> </p>
                            <h2 className="mt-5 text-center">Recommended Article: </h2>
                            <section className="mt-1 blog-articles" title="Getting to the Next Level in Programming">
                                    <section className="mt-5 blog-articles">
                                        <Link to="/next-level" className="blog-post" href="next-level.html">
                                        <div className="card" style={{width: "100%"}}>
                                            <img className="card-img-top link-img" src={Level} alt="Computer with Progress Graph"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">Getting to the Next Level in Programming<br></br>(3 Minute Read) <span className=" m-3 date"><time dateTime="2022-09-23"> 23 September 2022</time></span></h5>
                                            <p className="card-text">
                                            What skills do you need to really improve as a programmer?
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
                                            <h5 className="card-title">How to Begin Daily Learning <br></br>(5 Minute Read) <span className=" m-3 date"><time dateTime="2021-12-27"> 27 Dec 2021</time></span></h5>
                                        <p className="card-text">
                                            Sometimes you may have asked yourself: "What process can I use to begin
                                            developing who I am as a person daily?"<br></br> 
                                            This article is written to help you get started with your learning journey.

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