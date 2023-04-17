import { useState } from 'react';
import { Card, Button, Modal,Pagination } from 'react-bootstrap';
import LearnWritingPage from './learnWritingPage';
import './LearnPageMain.css';



function LearnPageMain() {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const articlesPerPage = 24;
  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };
  
  const renderPaginationItems = () => {
    const totalPages = Math.ceil(articles.length / articlesPerPage);
  
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };
  const indexOfLastArticle = activePage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);


  const handleNewArticle = () => {
    setShowModal(true);
  };

  const handleSaveArticle = (newArticle) => {
    newArticle.id = articles.length + 1;
    setArticles([...articles, newArticle]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleNewArticle} className="my-3">
        Write New Article
      </Button>
      {/* Render the list of articles */}
      {currentArticles.map((article, index) => (
        <Card style={{ width: '18rem' }} key={article.id} className="mb-3">
            
          <Card.Img variant="top" src={article.image} className="article-image" />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Pagination>{renderPaginationItems()}</Pagination>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Write a New Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LearnWritingPage onSave={handleSaveArticle} onCancel={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LearnPageMain;
