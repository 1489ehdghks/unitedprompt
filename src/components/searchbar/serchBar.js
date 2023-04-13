import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";

function SerchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search query
    console.log(searchQuery);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="작품검색"
               value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              <Button variant="secondary" type="submit">
              <AiOutlineSearch/>
            </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SerchBar;
