import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import thinking from "../images/thinking.svg"

function Home(props) {
  return (
    <div className="home d-flex align-items-center">
      <Container>
        <Row>
          <Col xs={{ span:12, order:1 }} md={{ span:6, order:12 }}>
            <h1 className="home-title">Hey, I'm</h1>
            <h1 className="home-title">Ryan Bass</h1>
          </Col>
          <Col className="d-flex align-items-center" xs={{ span:12, order:12 }} md={{ span:6, order:1 }}>
            <img className="thinking-svg" src={thinking} alt="thinking"/>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Home