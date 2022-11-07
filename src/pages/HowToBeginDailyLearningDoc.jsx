import { Link } from "react-router-dom";
import Learning from "../images/learning.png";
import Progress from "../images/progress.jpg";
import Level from "../images/next-level.jpg";
import BuyMeACoffeeMobile from "../components/BuyMeACoffeeMobile";
import SocialMediaContainer from "../components/SocialMediaContainer";

export const HowToBeginDailyLearningDoc = function(){

    return(
                <div className="full-page">
                    <div className="container">
                        <div className="row">
                            <article className="current-article color-acc-white mt-lg-5 mb-lg-5">
                            <h3 className="current-article-title mt-xxl-5">How to Begin Daily Learning</h3>
                            <h5 className="card-title">Author: &#10004;Jonathan Langner</h5>
                            <h5 className="card-title">Date Posted: &#128337; <time dateTime="2021-12-27"> 27 Dec 2021</time></h5>
                            <img className="article-img" src={Learning} alt="Computer with Progress Graph"></img>
                                <h3>Why Begin Learning Daily?</h3>
                            <ul>
                                <li>Daily Learning Keeps Your Brain Active</li>
                                <li>Daily Learning Helps Advance Your Career</li>
                                <li>Daily Learning Benefits You, Your Family, and Others Around You</li>
                            </ul>
                            <h3 className="mt-5">How Do You Begin Learning Daily?</h3>
                                <p className="h3 mt-5">First: Write, and think deeply about what you want to learn, and why.</p>
                                <p className="mt-5">Ask yourself: </p>
                                <p> What do I need to better help and encourage others? </p>
                                <p> What would be beneficial in better accomplishing goal x?</p>
                                <p> What are my priorities?</p>    
                                <p className="mt-5 h3">Second: Pick your highest priority learning goals for others, and for accomplishing your goals.</p> 
                                <p className="mt-5"> Research, find ask and decide on the specific resources you will need to accomplish each of your learning goals.</p>   
                                <p> Try to also make a reasonable estimate for the amount of time each of your learning goals will take.</p> 
                                <p> Depending on the amount of time each of your learning goals is estimated to take you may need to decide some goals are not worth it.</p> 
                                <p className="mt-5 h3">Third: At this point you will need to find or figure out a system to numerically track progress towards your goal.</p>    
                                <p className="mt-5">There are a few important things to include in your goal tracking:</p>
                                <ul>
                                    <li className="mt-5"> The amount of time you budgeted to work towards your goal.</li>
                                    <li className="mt-5"> The amount of time you spent working towards your goal on any given day you worked on it.</li>
                                    <li className="mt-5"> An evaluation of the progress you made. Keep Improving!</li>
                                </ul>
                                <p className="mt-5 h3">A list of useful tools for goal tracking:</p>
                                <ul>
                                    <li className="mt-5">Paper and Pencil(The classic, and is still often the most powerful tool available to you)</li>
                                    <li className="mt-5">Spreadsheets (Useful for pretty much anything: from identifying goals, processes, graphing, etc... )</li>
                                    <li className="mt-5">Apps (There many business applications to help your organize yourself, and your learning.) </li>
                                    <li className="mt-5">Graphs (Useful for seeing the big picture of data and for evaluating your progress.)</li>
                                    <li className="mt-5">Many, many more... </li>
                                </ul>
                                <p className="mt-5 h3">Fourth: As you work towards your learning goals you can certainly discover 
                                    either it is not the priority you may have thought, or that it takes modification or perseverance 
                                    in the real world.</p> 
                                <p className="mt-5 h3">The Best Tools for Learning and Growing Daily</p>
                                <ul>
                                    <li className="mt-5">Mathematics: Arithmetic, Algebra, Geometry, Linear Algebra, Calculus... (Teaches the mind critical reasoning skills.)</li>
                                    <li className="mt-5">Computers and Programming: (A fantastic way to learn problem solving, and to accomplish many design tasks.)</li>
                                    <li className="mt-5">Carefully Written and Crafted Books (Opens up, and explains new fields and ideas.)</li>
                                    <li className="mt-5">Well Designed and Prudently Taught Classes (Provides opportunities from people who are experts in their fields.)</li>
                                    <li className="mt-5">Reputable Online Resources which have a Specific Learning Goal (A network of information just within reach.)</li>
                                    <li className="mt-5">Perseverance, Self-Discipline, and Diligence (A stubborn willingness to complete the task no matter what.)</li>
                                    <li className="mt-5">A Teachable, Listening, Willing, and Humble Attitude (Realizing you are not the smartest person in the room, and being willing to consider others, as well as yourself.)</li>
                                    <li className="mt-5">An Others Centered and Giving Mindset (Learning to give and pass on what you have been given.)</li> 
                                    <li className="mt-5">A Good Schedule and Exercise Routine (Keeps you on track, and generally off the couch.)</li>
                                </ul>
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
                                <section className="mt-1 blog-articles" title="8 Programming Misconceptions">
                                    <section className="mt-5 blog-articles">
                                        <Link to="/programming-misconceptions" className="blog-post" href="programming-misconceptions.html">
                                        <div className="card" style={{width: "100%"}}>
                                            <img className="card-img-top link-img" src={Progress} alt="Eight Stones of Increasing Size"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">8 Misconceptions People Have About Programming <br></br>(5 Minute Read) <span className=" m-3 date"><time dateTime="2022-04-11"> 11 April 2022</time></span></h5>
                                            <p className="card-text">
                                                This article is written for those who want to get into Programming and it describes 
                                                some of the common misconceptions you will run into.
                                            </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </section>
                                </section>  
                            </article>
                            <hr className="mt-3"></hr>
                            <SocialMediaContainer></SocialMediaContainer>
                            <BuyMeACoffeeMobile></BuyMeACoffeeMobile>
                        </div>
                    </div>
                </div>
    );


}