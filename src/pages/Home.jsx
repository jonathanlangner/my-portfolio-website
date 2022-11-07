import ProfilePic from "../images/Jonathan_Langner.jpg";
import SocialMediaContainer from '../components/SocialMediaContainer';
import BuyMeACoffeeMobile from '../components/BuyMeACoffeeMobile';
import { Fragment } from 'react';

const HomeDoc = function(){

    return(
        <Fragment> 
            <div className="full-page">
                <div className="container">
                    <div className="text-center mt-2">
                    <div className="decorative-banner-mobile">
                        <img title="Programmer - Teacher" className="mt-3 mb-3 my-profile-pic-mobile" src={ProfilePic} alt="A teacher and programmer with a smile and some glasses."></img>
                            <div className="description-container mt-5">
                                <h2 title="Software Developer - Programmer" className="text-center">Jonathan Langner</h2>
                                <h4 title="Jonathan Langner" data-hover="Web Developer" data-active="Programmer" className="description text-center decorative-label" > </h4>
                            </div>
                        </div>
                    </div>
                    <section title="My Profile" className="mt-5">
                    <hr className="mt-2"></hr>
                            <h2 className="text-center mt-3">About Me</h2>
                            <h5 className="text-center">👋🙂 Hi there! I am Jonathan.</h5>
                            <h5 className="text-center">I am a web developer presently looking for work, as I would like to use my skill set 
                            to build excellent websites, products, and applications.</h5>
                        </section>
                        <section title="Location">
                            <h3 className="mt-2 text-center"><li className="lni lni-home social-links"> Residence</li></h3>
                            <h5 className="color-acc-white text-center">United States </h5>
                            <h3 className="mt-3 text-center"><li className="lni lni-world social-links"> Location</li></h3>
                            <h5 className="color-acc-white text-center"> Greater Rochester Area, MN, United States </h5>
                            <h3 className="mt-3 text-center"> <li className="lni lni-envelope social-links"> Email </li></h3>
                            <h5 className="color-acc-white text-center"> jonathanlangnerdev@gmail.com </h5>
                        </section>
                        <hr className="mt-3"></hr>
                        <section title="Random Facts" className="mt-4">
                            <h3 className="text-center">Random Facts</h3>
                            <h5 className="text-center">My first programming language I learned was C++.</h5>
                            <h5 className="text-center">I enjoy hiking, exercise and exploration, particularly when it comes to mountains. </h5>
                            <h5 className="text-center">My development skills are actively improving, so feel free to check back from time to time.</h5>
                        </section>
                        <section title="What I Do">
                            <hr className="mt-5"></hr>
                            <h3 className="text-center">What I Do</h3>
                            <h4 className="text-center mt-3"> 🕸 Web Development</h4>
                            <h5 className="text-center mt-3">I specialize in Web Development. 
                            At present my strongest skill set is Front End Web Development consisting of HTML, CSS, JavaScript, and React.
                            </h5>
                            <h5 className="text-center mt-4">I am also working to expand my skill set to be more Full Stack, by learning: Design, Testing, Data Structures, and Algorithms. 
                            </h5>
                        </section>
                    <hr className="mt-5"></hr>
                    <h3 className="mt-3">My Skills:</h3>
                    <img title="HTML5" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white" alt="HTML5" height="35px" />
                    <img title="CSS3" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-CSS 3-1572B6?logo=CSS3&logoColor=white" alt="CSS3" height="35px" /> 
                    <img title="JavaScript" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=black" alt="JavaScript" height="35px" />
                    <img title="Node.js" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Node.js-green?logo=Node.js&logoColor=black" alt="Node.js" height="35px" /> 
                    <img title="React" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black" alt="React" height="35px" />  
                    <img title="BootStrap" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-BootStrap-7952B3?logo=BootStrap&logoColor=white" alt="Bootstrap" height="35px" />
                    <img title="Sass" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Sass-CC6699?logo=Sass&logoColor=white" alt="Sass" height="35px" />
                    <img title="Linux" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Linux-sucesss?logo=Linux&logoColor=white" alt="Linux" height="35px" />
                    <img title="Bash" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Bash-teal?logo=GNUBash&logoColor=white" alt="Bash" height="35px" />  
                    <img title="C++" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-C++-purple?logo=C%2b%2b&logoColor=white" alt="C++" height="35px" />  
                    <img title="C#" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white" alt="C#" height="35px" />
                    <img title="Git" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Git-yellowgreen?logo=Git&logoColor=white" alt="Git" height="35px" />  
                    <img title="GitKraken" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-GitKraken-179287?logo=GitKraken&logoColor=white" alt="GitKraken" height="35px" />   
                    <img title="GitHub" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-GitHub-4285F4?logo=GitHub&logoColor=white" alt="GitHub" height="35px" />
                    <img title="Visual Studio Code" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Visual Studio Code-007ACC?logo=VisualStudioCode&logoColor=white" alt="Visual Studio Code" height="35px" />
                    <img title="Firefox" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Firefox-orange?logo=Firefox&logoColor=black" alt="Firefox" height="35px" />
                    <img title="Google Chrome" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Google Chrome-4285F4?logo=GoogleChrome&logoColor=white" alt="Google Chrome" height="35px" />      
                    <hr className="mt-5"></hr>  
                    <SocialMediaContainer></SocialMediaContainer>
                    <BuyMeACoffeeMobile></BuyMeACoffeeMobile>
                </div>
            </div>   
        </Fragment>
    );
}

export default HomeDoc;