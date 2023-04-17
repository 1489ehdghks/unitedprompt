import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function LearnWritingPage({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');

  const handleSave = () => {
    const newArticle = {
      title: title,
      summary: summary,
      image: image,
    };
    onSave(newArticle);
  };

  return (
    <div>

      <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      <Form>
        <Form.Group>
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter the title of your article"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Summary</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder="Enter a brief summary of your article"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Article Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Enter the URL of the image for your article"
          />
        </Form.Group>
      </Form>
        <Button variant="primary" type="submit" className="mr-2">
          Save
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default LearnWritingPage;
