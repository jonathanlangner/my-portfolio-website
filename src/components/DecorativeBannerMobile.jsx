import ProfilePic from "../images/Jonathan_Langner.png";

const DecorativeBannerMobile = function(){
   return(
    <div className="text-center mt-2">
        <div className="decorative-banner-mobile">
            <img title="Programmer - Teacher" className="mt-3 mb-3 my-profile-pic-mobile" src={ProfilePic} alt="A teacher and programmer with a smile and some glasses."></img>
            <div className="description-container mt-5">
                <h2 title="Software Developer - Teacher" className="text-center">Jonathan Langner</h2>
                <h4 title="Jonathan Langner" className="description text-center">Web Developer</h4>
            </div>
        </div>
    </div>
    );
}


export default DecorativeBannerMobile;