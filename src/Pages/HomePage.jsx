import React from "react";
import SideBar from "../Components/SideBar/SideBar";
import VideoList from "../Components/VideoList/VideoList";
import Header from "../Components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Components/SideBar/SideBar";

const HomePage = () => {
  return (
    <>
      {/* <Container fluid>
        <Header />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col xs={10}>
            <VideoList />
          </Col>
        </Row>
      </Container> */}
      <Header />
      <VideoList />
    </>
  );
};

export default HomePage;
