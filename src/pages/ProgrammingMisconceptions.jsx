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
                            <hr></hr>
                            <h3>As you learn programming: You will want to watch for and avoid the pitfalls of 8 common misconceptions around programming. (Understanding these misconceptions will give you more clarity on your personal programming journey.)</h3>
                            <hr></hr>
                            <hr></hr>
                            <h3 className="mt-3"><b>What Are 8 Common Misconceptions Associated With Programming?</b></h3>
                            <hr></hr>
                                <p className="h3 mt-3">Misconception 1: Programming is impossible for you to learn.</p>
                                <p className="mt-4"> <i>Anyone can learn programming provided you have the following:</i> </p>
                                <ul>
                                    <li className="mt-3">🕰 A simple understanding of Arithmetic, along with a little Algebra.</li>
                                    <li className="mt-3">🧠 A desire to consistently learn each day.</li>
                                    <li className="mt-3">🎨 An aspiration to continuously work with unique and challenging puzzles or problems which build your creativity and problem-solving skills.</li> 
                                </ul>
                            <hr></hr>    
                                <p className="h3 mt-3">Misconception 2: Programming can be learned in a day.</p>
                                <ul>
                                <li className="mt-4">☀ There is a reason I emphasize the concept of daily learning. Programming is a skillset which teaches you a novel way to be creative. It is broad enough and challenging enough that dedicated daily effort makes the biggest impact over time. </li>
                                    <li className="mt-3">Expect it to take 120 days of consistent effort and study for 30 minutes each day for you to be relatively creative with the core concepts of programming.</li>
                                    <li className="mt-3">120 days is an estimate, and your starting point may allow you to progress more or less quickly. 
                                        The key is: Strive for daily learning, challenge yourself, and track your learning progress.</li> 
                                </ul>
                            <hr></hr>    
                            <p className="h3 mt-3">Misconception 3: Programming can only be used for designing applications.</p>
                            <p className="mt-4"><i>Programming is useful for much more than writing applications. <br></br> A few other examples include:</i> </p>
                            <ul>
                                <li className="mt-3">💯 Evaluating Data. This is often done for Scientific Research, Business Analysis, and Learning.</li>
                                <li className="mt-3">🌳 Solving Real World Problems. Programming can be used to simulate and solve different real-world problems or ideas. </li>
                                <li className="mt-3">🪢 Programming is used in combination with machines to do automation. (Computer Numeric Control Machines, and Manufacturing Robotics)</li> 
                                <li className="mt-3">🏡 Enhancing your Home. Programming allows you to make your home smarter by adding sensors that you can control to regulate lights and temperature.</li> 
                            </ul>
                            <hr></hr>
                            <p className="h3 mt-3">Misconception 4: Programming is something you can only learn through college.</p>
                            <p className="mt-4"><i>There are many ways to delve into programming besides college. <br></br>Here are just a few of the many options out there today:</i> </p>
                            <ul>
                                <li className="mt-3"><a href="https://www.codewars.com/">Codewars:</a> Codewars is a website that provides a learning gamification method that helps you practice and improve your problem-solving skills. </li>
                                <li className="mt-3"><a href="https://github.com/">GitHub:</a> GitHub is a file management system that provides many open-source examples of real-world programming projects, and the opportunity to collaborate with others on projects.</li>
                                <li className="mt-3"><a href="https://developer.mozilla.org/en-US/">MDN:</a> MDN teaches quality Web Design, and is exceedingly helpful in setting you on track for a web development career.</li> 
                                <li className="mt-3"><a href="https://www.linkedin.com/learning/">LinkedIn Learning:</a> LinkedIn Learning provides courses that help improve your problem solving skills, and allows you to build an online learning presence. </li>
                                <li className="mt-3"><a href="https://leetcode.com/">LeetCode:</a> LeetCode gives you the opportunity to practice Algorithms and Data Structures and is an excellent resource for preparing for interviews.</li>  
                                <li className="mt-3">Programming Boot Camps provide a fast-paced learning environment to join the programming industry. Not all Bootcamps are worth the cost. Please do your research carefully before signing up for one.</li>  
                            </ul>
                            <hr></hr>
                            <p className="h3 mt-3">Misconception 5: You need to learn all the programming languages.</p>
                                <ul>
                                    <li className="mt-3">You don't need to learn every programming language to be a valuable programmer. </li>
                                    <li className="mt-3">You cannot possibly learn and master all programming languages. </li>
                                    <li className="mt-3">Pick some programming languages that are relevant and actually useful for your design or personal purposes and learn those in-depth. </li>
                                </ul>
                            <hr></hr>
                            <p className="h3 mt-3">Misconception 6: You need to learn just one programming language. </p>
                            <p className="mt-3"><i>For your creative potential and understanding the big picture of technology: it is well worth knowing more than one programming language. This additional overview will broaden your understanding and allow you to see the ins and outs of the different programming languages.  </i> </p>
                            <hr></hr>
                            <p className="h3 mt-3">Misconception 7: "My favorite language is the best." </p>
                            <p className="mt-3"><i>No programming language is best for absolutely everything. Each of the languages have their own perks, quirks, and things which make them more or less useful for different designs and tasks.</i> </p>
                            <hr></hr>
                            <p className="h3 mt-3">Misconception 8: Programming can solve all problems.</p>
                            <p className="mt-3"><i>Programming is a tool for nearly infinite creativity. However: it is a tool and will not solve all your life problems and tasks. That said: programming is a tool that is still well worth learning and utilizing.  </i> </p>
                            <hr></hr>
                            <h2 className="mt-5 text-center">Recommended Articles: </h2>
                            <section className="mt-1 blog-articles" title="Getting to the Next Level in Programming">
                                    <section className="mt-5 blog-articles">
                                        <Link to="/next-level" className="blog-post" href="next-level.html">
                                        <div className="card" style={{width: "100%"}}>
                                            <img className="card-img-top link-img" src={Level} alt="Computer with Progress Graph"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">Getting to the Next Level in Programming<br></br>(3 Minute Read) <span className=" m-3 date"><time dateTime="2022-09-23"> 23 September 2022</time></span></h5>
                                            <p className="card-text">
                                            What skills do you need to be studying and using to improve as a programmer?
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