
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/16689312/pexels-photo-16689312.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>ChatGPT</Card.Title>
        <Card.Text>
          Elzero Web School
        </Card.Text>
        <p>Weeks Ago 3 . Thousand Views 28</p>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
