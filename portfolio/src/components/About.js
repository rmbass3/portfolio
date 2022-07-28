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
          <Col className="about-img-col d-flex position-relative align-items-center justify-content-center">
            <img className="code-svg position-absolute" src={code} alt="code"/>
            <img className="about-blob" src={aboutBlob} alt="aboutBlob"/>
          </Col>
          <Col className="about-text-col d-flex position-relative justify-content-center">
            <div className="inner-text-col">
              <p className="about-title text-white text-center mt-5">About me</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About