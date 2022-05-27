import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import thinking from "../images/thinking.svg"
import homeBlob from "../images/blob2.svg"

function Home(props) {
  return (
    <div className="home d-flex align-items-center" id="home">
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