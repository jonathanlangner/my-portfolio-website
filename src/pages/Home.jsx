import ProfilePic from "../images/Jonathan_Langner.jpg";
import SocialMediaContainer from '../components/SocialMediaContainer';
import BuyMeACoffeeMobile from '../components/BuyMeACoffeeMobile';
import { Fragment } from 'react';

const HomeDoc = function(){

    return(
        <Fragment> 
            <div className="full-page">
                <div className="container">
                    <div className="mt-2">
                    <div className="decorative-banner-mobile">
                        <img title="Programmer - Teacher" className="mt-3 mb-3 my-profile-pic-mobile" src={ProfilePic} alt="A teacher and programmer with a smile and some glasses."></img>
                            <div className="description-container mt-5">
                                <h2 title="Software Developer - Programmer" className="text-center">Jonathan Langner</h2>
                                <h4 title="Jonathan Langner" className="description text-center decorative-label" > Designer ~ Web Developer </h4>
                            </div>
                        </div>
                    </div>
                    <section title="My Profile" className="mt-5">
                    <hr className="mt-2"></hr>
                            <h5 className="text-center">Designer ~ Web Developer which is looking to add value to a company and team. I use my abilities 
                            to construct excellent websites, products, and applications which enrich people's lives.</h5>
                            <h5 className="text-center">Learning is one of my favorite pass times, and I am constantly invested in improving my design skills and helping others however I can. 
                            </h5>
                           
                        </section>
                        <hr className="mt-3"></hr>
                        <section className="flex-set">
                                    <section className="home-card m-3">
                                        <h3 className="text-center mt-3"> 🏔 Designer</h3>
                                        <h5 className="mt-3 text-adjust"> I enjoy being creative and providing a thoughtful perspective to the problems and opportunities of modern design.
                                        </h5>
                                        <h5 className="mt-2 text-adjust" > Design areas I am learning and specializing in: <br></br>
                                        <img className="inline-design-skill" title="Brainstorming" src="https://img.shields.io/badge/-🧠 Brainstorming-007ACC?&logoColor=white" alt="Brainstorming"/>
                                        <img className="inline-design-skill" title="Problem Solving" src="https://img.shields.io/badge/- ❓ Problem Solving-007ACC?&logoColor=white" alt="Problem Solving"/>
                                        <img className="inline-design-skill" title="Creative Design" src="https://img.shields.io/badge/- 💡 Creative Design-007ACC?&logoColor=white" alt="Creative Design"/>
                                        <img className="inline-design-skill" title="UI Design" src="https://img.shields.io/badge/- 📱 UI Design -007ACC?logoColor=white" alt="UI Design"/>
                                        <img className="inline-design-skill" title="Software and Web Design" src="https://img.shields.io/badge/🧭 Software and Web Architecture -007ACC?&logoColor=white" alt="Software and Web Architecture"/>
                                        </h5>
                                    </section>
                                    <section className="home-card m-3">
                                        <h3 className="text-center mt-3"> 🕸 Web Developer</h3>
                                        <h5 className="mt-3 text-adjust">I specialize in Web Development. 
                                        At present: my best skill set is Front End Web Development consisting of HTML, CSS, JavaScript, and React.
                                        </h5>
                                        <h5 className="mt-2 text-adjust">I am studying to expand my capabilities to be Full Stack. <br></br> <br></br>Presently practicing and learning: <br></br>
                                        <img className="inline-design-skill" title="Design" src="https://img.shields.io/badge/- 📜 Design-007ACC?&logoColor=white" alt="Design"/>
                                        <img className="inline-design-skill" title="Testing" src="https://img.shields.io/badge/- 🔎 Testing-007ACC?Code&logoColor=white" alt="Testing"/>
                                        <img className="inline-design-skill" title="Data Structures" src="https://img.shields.io/badge/- 💾 Data Structures-007ACC?&logoColor=white" alt="Data Structures"/>
                                        <img className="inline-design-skill" title="Algorithms" src="https://img.shields.io/badge/- 🧮 Algorithms -007ACC?&logoColor=white" alt="Algorithms"/>
                                        </h5>
                                    </section>
                            <section className="home-card m-3">
                                    <h3 className="mt-3"> 📐Design Tech Tools I use:</h3>
                                    <img className="design-skill " title="Visual Studio Code" src="https://img.shields.io/badge/-Visual Studio Code-007ACC?logo=VisualStudioCode&logoColor=white" alt="Visual Studio Code"/>
                                    <img className="design-skill " title="Figma" src="https://img.shields.io/badge/-Figma-000000?logo=Figma&logoColor=white" alt="Figma"/>
                                    <img className="design-skill " title="Firefox" src="https://img.shields.io/badge/-Firefox-orange?logo=Firefox&logoColor=black" alt="Firefox" />
                                    <img className="design-skill " title="Google Chrome" src="https://img.shields.io/badge/-Google Chrome-4285F4?logo=GoogleChrome&logoColor=white" alt="Google Chrome"  />
                                    <img className="design-skill " title="Brave" src="https://img.shields.io/badge/-Brave-orange?logo=Brave&logoColor=black" alt="Brave"/>  
                                    <img className="design-skill " title="GitKraken" src="https://img.shields.io/badge/-GitKraken-179287?logo=GitKraken&logoColor=white" alt="GitKraken"  />
                                    <img className="design-skill " title="Linux" src="https://img.shields.io/badge/-Linux-005500?&logo=Linux&logoColor=white" alt="Linux" />
                                    <img className="design-skill" title="VirtualBox" src="https://img.shields.io/badge/-VirtualBox-gray?logo=VirtualBox&logoColor=white" alt="Virtual Box" />
                                    <img className="design-skill"  title="Krita" src="https://img.shields.io/badge/-Krita-7952B3?logo=Krita&logoColor=white" alt="Krita"  />
                                    <img className="design-skill " title="Google Workspace" src="https://img.shields.io/badge/-Google Workspace-4285F4?logo=Google&logoColor=white" alt="Google Sheets" />
                                    <img className="design-skill" title="Libre Office" src="https://img.shields.io/badge/-LibreOffice-005500?logo=LibreOffice&logoColor=white" alt="Google Sheets"  />
                                    <img className="design-skill" title="GitHub" src="https://img.shields.io/badge/-GitHub-4285F4?logo=GitHub&logoColor=white" alt="GitHub"/>
                            </section>

                            <section className="home-card m-3">
                                    <h3 className="mt-3"> 🗃 My Stack:</h3>
                                    <img className="design-skill pic-skill" title="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white" alt="HTML5" />
                                    <img className="design-skill " title="CSS3" src="https://img.shields.io/badge/-CSS 3-1572B6?logo=CSS3&logoColor=white" alt="CSS3" /> 
                                    <img className="design-skill" title="JavaScript"  src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=black" alt="JavaScript"  />
                                    <img className="design-skill " title="Node.js"  src="https://img.shields.io/badge/-Node.js-green?logo=Node.js&logoColor=black" alt="Node.js"  /> 
                                    <img className="design-skill " title="React"  src="https://img.shields.io/badge/-React-61DAFB?logo=React&logoColor=black" alt="React" />  
                                    <img className="design-skill" title="BootStrap"  src="https://img.shields.io/badge/-BootStrap-7952B3?logo=BootStrap&logoColor=white" alt="Bootstrap"  />
                                    <img className="design-skill " title="Sass" src="https://img.shields.io/badge/-Sass-CC6699?logo=Sass&logoColor=white" alt="Sass"  />
                                    <img className="design-skill" title="Bash"  src="https://img.shields.io/badge/-Bash-teal?logo=GNUBash&logoColor=white" alt="Bash"  />  
                                    <img className="design-skill " title="C++"  src="https://img.shields.io/badge/-C++-purple?logo=C%2b%2b&logoColor=white" alt="C++"  />  
                                    <img className="design-skill " title="C#"  src="https://img.shields.io/badge/C%23-239120?logo=c-sharp&logoColor=white" alt="C#"  />
                                    <img className="design-skill " title="Git"  src="https://img.shields.io/badge/-Git-yellowgreen?logo=Git&logoColor=white" alt="Git" />    
                                    <img className="design-skill " title="Java"  src="https://img.shields.io/badge/-Java-ff5500?logo=OpenJDK&logoColor=white" alt="Java"/>
                            </section>
                    </section>
                    
                    <hr className="mt-5"></hr> 
                    <section className="home-card-spec m-3">
                        <h3 className="mt-3">🔅 Adding One More Thing:</h3>  
                        <h5>I am an ACE Certified Personal Trainer. While I am not actively using this certification at present for clients: I will be working on ways I can use this valuable skill set to help others reach their health goals. </h5>
                        <a href="https://credentials.acefitness.org/caa8800a-5fe8-48b2-942e-241a6ab7136a#gs.sesvhn"><img className="cert-link" title="ACE Certified Personal Trainer" alt="ace-personal trainer certification"src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/68981683"></img></a>      
                        <h3 className="mt-3">Personal Training Skills:</h3>
                        <img title="Program Design" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Program Design-FF0000?&logoColor=white" alt="Program Design" height="35px" />    
                        <img title="Exercise Techniques" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Exercise Techniques-FF0000?&logoColor=white" alt="Exercise Techniques" height="35px" />   
                        <img title="Goal Setting" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Goal Setting-FF0000?&logoColor=white" alt="Goal Setting" height="35px" />   
                        <img title="Exercise Instruction" style={{margin: 1 + "rem"}} src="https://img.shields.io/badge/-Exercise Instruction-FF0000?&logoColor=white" alt="Exercise Instruction" height="35px" />   
                    </section>
                    <hr className="mt-5"></hr>  
                    <SocialMediaContainer></SocialMediaContainer>
                    {/* <BuyMeACoffeeMobile></BuyMeACoffeeMobile> */}
                </div>
            </div>   
        </Fragment>
    );
}

export default HomeDoc;