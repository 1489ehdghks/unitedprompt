import { useState } from 'react';
import { Card, Button, Modal,Pagination,Carousel } from 'react-bootstrap';
import LearnWritingPage from './learnWritingPage';
import './LearnPageMain.css';



function LearnPageMain() {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const articlesPerPage = 12;
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

    setArticles([...articles, newArticle]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  return (
    <div>
      <Button variant="outline-dark" onClick={handleNewArticle} className="my-3 float-right">
        Write New Article
      </Button>
      <div className="main-content">
      <div className="card-container">
      <Carousel>
        {[...Array(Math.ceil(currentArticles.length / 12))].map((_, page) => {
          const pageStartIndex = page * 12;
          return (
            <Carousel.Item key={page}>
              <div className="row">
                {[...Array(4)].map((_, colIndex) => {
                  const cardStartIndex = pageStartIndex + colIndex * 3;
                  return (
                    <div className="col-md-3" key={colIndex}>
                      {currentArticles
                        .slice(cardStartIndex, cardStartIndex + 3)
                        .map((article) => (
                          <Card key={article.id} className="mb-3">
                            <Card.Img variant="top" src={article.image} className="article-image" />
                            <Card.Body>
                              <Card.Title>{article.title}</Card.Title>
                              <Card.Text>{article.summary}</Card.Text>
                            </Card.Body>
                          </Card>
                        ))}
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
    </div>
    <div className="footer">
      <Pagination>{renderPaginationItems()}</Pagination>
      </div>
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
