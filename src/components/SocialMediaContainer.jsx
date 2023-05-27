import { Fragment } from "react";

const SocialMediaContainer = function(){
        const copyRight = new Date().getFullYear();
    return(
            <Fragment>
                    <h3 className="mt-3 text-center">Social Media</h3>
                        <section className="font-lg social-links color-acc-white text-center">
                                <a title="Jonathan Langner on Twitter" href="https://twitter.com/jonlangner1" className="lni lni-twitter-original social-links-icons"><br></br><span className="text-dark">Twitter</span></a>
                                <a title="LinkedIn Profile" href="https://linkedin.com/in/jonathan-langner" className="lni lni-linkedin-original social-links-icons"><br></br><span className="text-dark">LinkedIn</span></a>
                                <a title="Jonathan Langner on Github" href="https://github.com/jonathanlangner" className="lni lni-github-original social-links-icons" ><br></br><span className="text-dark">GitHub</span></a>   
                        </section>
                        <hr></hr>
                        <h6 className="mt-5 text-center">&#169; {copyRight} All rights reserved.</h6>
            </Fragment>
    );
}


export default SocialMediaContainer;