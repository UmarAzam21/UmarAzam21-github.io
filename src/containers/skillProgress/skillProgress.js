import React, {useContext} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className={isDark ? "proficiency-container dark-mode" : "proficiency-container"}>
          <div className="proficiency-header">
            <h1 className="proficiency-heading">Proficiency</h1>
          </div>
          
          <div className="proficiency-cards">
            {techStack.experience.map((exp, i) => {
              return (
                <div key={i} className="proficiency-card">
                  <div className="card-icon">
                    <i className={exp.icon}></i>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title">{exp.Stack}</h3>
                    <p className="card-description">{exp.description}</p>
                  </div>

                  <div className="card-footer">
                    <div className="proficiency-percentage">{exp.progressPercentage}</div>
                    <div className="progress-bar">
                      <span style={{width: exp.progressPercentage}}></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="proficiency-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
