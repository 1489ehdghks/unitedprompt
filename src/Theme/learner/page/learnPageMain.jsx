import { useState } from 'react';
import { Card, Button, Modal,Pagination,Carousel } from 'react-bootstrap';
import LearnWritingPage from './learnWritingPage';
import './LearnPageMain.css';



function LearnPageMain() {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const articlesPerPage = 6;
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
      <Button variant="outline-dark" onClick={handleNewArticle} className="my-3 float-right">
        Write New Article
      </Button>
      <div className="main-content">
      <div className="card-container">
      <Carousel>
        {currentArticles.map((article, index) => {
          if (index % 6 === 0) {
            return (
              <Carousel.Item key={article.id}>
                <article>
                  {currentArticles.slice(index, index + 6).map((article) => (
                    <Card style={{ width: '18rem' }} key={article.id} className="mb-3">
                      <Card.Img variant="top" src={article.image} className="article-image" />
                        <Card.Body>
                          <Card.Title>{article.title}</Card.Title>
                          <Card.Text>{article.summary}</Card.Text>
                        </Card.Body>
                      </Card>
                   ))}
          </article>
        </Carousel.Item>
      );
    }
    return null;
  })}
</Carousel>
      </div>
    </div>
    <div className="footer">
      <Pagination>{renderPaginationItems()}</Pagination>
      </div>
    </div>
  );
}

export default LearnPageMain;
