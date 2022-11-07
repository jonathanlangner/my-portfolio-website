import { Fragment } from "react";
import { SiCsharp } from "react-icons/si";
const Skills = function () {
  return (
    <Fragment>
      <section className="skills text-center">
        <section title="Skills">
          <h3 className="mt-5">Skills</h3>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-layout social-links"> Web Development </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `50%` }}></div>
              </div>
              <h5 className="skill-level">50%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-dev social-links"> Software Development</li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `40%` }}></div>
              </div>
              <h5 className="skill-level">40%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white ">
            <li className="lni lni-bubble social-links"> Communication</li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `60%` }}></div>
              </div>
              <h5 className="skill-level">60%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-javascript social-links"> JavaScript </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `50%` }}></div>
              </div>
              <h5 className="skill-level">50%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-react social-links"> React </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `40%` }}></div>
              </div>
              <h5 className="skill-level">40%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni social-links"> <SiCsharp /> C#</li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `30%` }}></div>
              </div>
              <h5 className="skill-level">30%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-java social-links"> Java </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `20%` }}></div>
              </div>
              <h5 className="skill-level">20%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-git social-links"> Git </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `30%` }}></div>
              </div>
              <h5 className="skill-level">30%</h5>
            </div>
          </h5>
          <h5 className="mt-3 color-acc-white">
            <li className="lni lni-display-alt social-links"> Linux </li>
            <div className="skill-container">
              <div className="skill-rate">
                <div className="skill-meter" style={{ width: `30%` }}></div>
              </div>
              <h5 className="skill-level">30%</h5>
            </div>
          </h5>
        </section>
        
      </section>
    </Fragment>
  );
};

export default Skills;
