import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Parallax } from "react-scroll-parallax"
import thinking from "../images/thinking.svg"
import homeBlob from "../images/blob2.svg"
import squares from "../images/squares.svg"

function Home(props) {
  return (
    <div className="home d-flex align-items-center" id="home">
      <Parallax speed={15} className="home-parallax" id="square1">
        <div className="home-squares">
          <img className="square-s rotating-s" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Parallax speed={10} className="home-parallax" id="square2">
        <div className="home-squares">
          <img className="square-m rotating-m" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Parallax speed={5} className="home-parallax" id="square3">
        <div className="home-squares">
          <img className="square-l rotating-l" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Parallax speed={15} className="home-parallax" id="square4">
        <div className="home-squares">
          <img className="square-s rotating-s" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Parallax speed={10} className="home-parallax" id="square5">
        <div className="home-squares">
          <img className="square-m rotating-m" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Parallax speed={5} className="home-parallax" id="square6">
        <div className="home-squares">
          <img className="square-l rotating-l" src={squares} alt="squares"/>
        </div>
      </Parallax>
      <Container>
        <Row className="home-row">
          <Col className="home-title-col mt-3 mt-md-0" xs={{ span:12, order:1 }} md={{ span:6, order:12 }}>
            <h1 className="home-title">Hey, I'm <br/> Ryan Bass.</h1>
            <p className="home-desc mb-3">Developer, UNCC Undergraduate</p>
            <Row className="home-button-row">
              <Col className="home-contact-col mt-5 mt-md-0" xs={{ span:12, order:12 }} md={{ span:6, order:12 }}>
                <a href="#contact"><button className="home-contact-button">Contact</button></a>
              </Col>
              <Col className="home-about-col mt-3 mt-md-0" xs={{ span:12, order:1 }} md={{ span:6, order:1 }}>
                <a href="#about"><button className="home-about-button">About</button></a>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-center justify-content-center position-relative" xs={{ span:12, order:12 }} md={{ span:6, order:1 }}>
            <img className="thinking-svg position-absolute" src={thinking} alt="thinking"/>
            <img className="home-blob" src={homeBlob} alt="blob"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home