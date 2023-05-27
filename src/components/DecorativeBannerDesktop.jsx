import ProfilePic from "../images/Jonathan_Langner.png";

const DecorativeBannerDesktop = function () {
  return (
    <div className="decorative-banner-desktop">
      <div className="text-center">
        <img
          title="Programmer - Teacher"
          className="mt-3 mb-3 my-profile-pic-desk"
          src={ProfilePic}
          alt="A teacher and programmer with a smile and some glasses."
        ></img>
        <div className="description-container mt-5">
          <h2 title="Programmer - Teacher" className="text-center">
            Jonathan Langner
          </h2>
          <h4 title="Jonathan Langner" className="description text-center">
            Web Developer
          </h4>
        </div>
      </div>
    </div>
  );
};


export default DecorativeBannerDesktop;
