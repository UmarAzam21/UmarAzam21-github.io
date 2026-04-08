import React, {useContext} from "react";
import "./Testimonials.scss";
import {testimonialSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Testimonials() {
  const {isDark} = useContext(StyleContext);

  if (!testimonialSection)
    console.error("testimonialSection object for Testimonials section is missing");

  if (!testimonialSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="testimonial-header">
          <h1 className="testimonial-header-title">{testimonialSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode testimonial-header-subtitle"
                : "subTitle testimonial-header-subtitle"
            }
          >
            {testimonialSection.subtitle}
          </p>
        </div>
        <div className="testimonial-container">
          {testimonialSection.testimonials.map((testimonial, i) => {
            if (!testimonial) {
              console.log(
                `Testimonial for ${testimonialSection.title} is missing`
              );
            }
            return (
              <div key={i} className="testimonial-card">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                )}
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
