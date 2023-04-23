
import React from 'react';
import './Container.css';

function MainPageContainer() {
  return (
    <div>
    <div className="container">
      <h2>learning</h2>
      <div className="item">
        <div className="image">
          <img src="award-image.jpg" alt="Award Image" />
        </div>
        <div className="text">
          <h3>쉽고 간단하게 중요한 것만</h3>
          <p>개발자가 직접 가장 활용을 많이 한 확장프로그램들과 프롬프트들과 최적화를 알려드리겠습니다.</p>
          <p>웹페이지에 존재하는 로고를 제외한 모든 그림의 프롬프트와 그리는 방법을 알려드리겠습니다.</p>
        </div>
      </div>
      {/* Add more item divs as needed */}
    </div>
    
    <div className="container">
      <h2>sharing</h2>
      <div className="item">
        <div className="image">
          <img src="feature-image.jpg" alt="Feature Image" />
        </div>
        <div className="text">
          <h3>필요한 프롬프트들을 재빠르게</h3>
          <p>추천과 북마크 시스템을 이용하여 원하는 그림의 프롬프트를 얻고 다시 찾아볼 수 있게 하겠습니다.</p>
          <p>주간 베스트 3위 안의 그림은 따로 명예의 전당에 넣고 그 주가 끝나면 명예의 전당에 올라간 사람들만 볼 수 있는 시스템을 구축할 예정입니다.</p>
        </div>
      </div>
      {/* Add more item divs as needed */}
    </div>

    <div className="container">
      <h2>about</h2>
      <div className="item">
        <div className="image">
          <img src="involvement-image.jpg" alt="Involvement Image" />
        </div>
        <div className="text">
          <h3>소통과 요청사항을 빠르고 쉽게</h3>
          <p>패치노트를 통해 개발한 내용을 안내해드릴 것이며, 요청사항을 올려주시면 확인하여 개발하겠습니다.</p>
        </div>
      </div>
      {/* Add more item divs as needed */}
    </div>
    </div>
  );
}

export default MainPageContainer;
