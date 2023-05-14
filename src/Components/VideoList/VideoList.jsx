import React from 'react'
import VideoCard from '../Video Card/VideoCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const VideoList = () => {
  return<>
   <Container>
      <Row className='gy-2'>
        <Col className='md'><VideoCard/></Col>
        <Col ><VideoCard/></Col>
        <Col ><VideoCard/></Col>
        
        
      </Row>
    </Container>
 
    
    

  
  </>
}

export default VideoList