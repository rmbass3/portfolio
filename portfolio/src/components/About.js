import "../css/About.css"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import code from "../images/code.svg"
import aboutBlob from "../images/blob4.svg"

function About(props) {
  return (
    <div className="about d-flex align-items-center" id="about">
      <Container>
        <Row className="about-row">
          <Col className="about-img-col d-flex position-relative align-items-center justify-content-center" xs={{ span:12, order:1 }} md={{ span:6, order:12 }}>
            <img className="code-svg position-absolute" src={code} alt="code"/>
            <img className="about-blob" src={aboutBlob} alt="aboutBlob"/>
          </Col>
          <Col className="about-text-col d-flex position-relative" xs={{ span:12, order:1 }} md={{ span:6, order:12 }}>
            <div className="about-inner-text-col d-flex flex-column justify-content-start">
              <p className="about-title text-white text-center my-5">About me</p>
              <div className="about-paragraph">
                <div className="about-paragraph-section text-white px-3 py-2">
                  <p className="about-paragraph-title">Interests</p>
                  <p className="about-paragraph-text">
                  I’m interested in learning a wide array of technologies within the field, 
                  and am willing to take on different projects.
                  </p>
                </div>
                <div className="about-paragraph-section text-white px-3 py-2">
                  <p className="about-paragraph-title">Education</p>
                  <p className="about-paragraph-text">
                    I’m a developer pursuing a Master’s in
                    Computer Science at University of North Carolina at Charlotte.
                  </p>
                </div>
                <div className="about-paragraph-section text-white px-3 py-2">
                  <p className="about-paragraph-title">Experience</p>
                  <p className="about-paragraph-text">
                    Alongside developing a handful of projects with different technologies,
                    I've also created and designed websites for different clients.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About