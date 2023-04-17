import { useState } from 'react';
import { Modal, Tab, Tabs, Form, Button } from 'react-bootstrap';

function SideMenuCreateModal({ onSubmit }) {
  const [showModal, setShowModal] = useState(false);
  const [pageName, setPageName] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // Call the onSubmit function passed as a prop to update the list of pages in the side menu
    onSubmit(pageName);
    // Clear the form inputs
    setPageName('');
    setPageUrl('');
    // Close modal after form submission
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleModal}>Create Page</Button>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Page Creation and Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="page-creation">
            <Tab eventKey="page-creation" title="Page Creation">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPageName">
                  <Form.Label>Page Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter page name" value={pageName} onChange={(event) => setPageName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPageUrl">
                  <Form.Label>Page URL</Form.Label>
                  <Form.Control type="text" placeholder="Enter page URL" value={pageUrl} onChange={(event) => setPageUrl(event.target.value)} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="mx-2">
                    Create
                  </Button>
                  <Button variant="secondary" onClick={handleModal} className="mx-2">
                    Cancel
                  </Button>
                </div>
              </Form>
            </Tab>
            <Tab eventKey="page-editing" title="Page Editing">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPageName">
                  <Form.Label>Page Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter page name" value={pageName} onChange={(event) => setPageName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPageUrl">
                  <Form.Label>Page URL</Form.Label>
                  <Form.Control type="text" placeholder="Enter page URL" value={pageUrl} onChange={(event) => setPageUrl(event.target.value)} />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="mx-2">
                    Update
                  </Button>
                  <Button variant="secondary" onClick={handleModal} className="mx-2">
                    Cancel
                  </Button>
                </div>
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SideMenuCreateModal;
