import React, { useState } from 'react';
import InfoTopMenu from '../menu/infoTopMenu';

const InfoPage = () => {

  return (
    
    <div className="product-page">
            <header className="MainPage-header">
                <figure>
                  <InfoTopMenu/>
                </figure>
            </header>

    <div className="product-header">
    </div>
    <div className="product-body">
      <div className="product-description">
        <h2 href="/Dreamer">초보개발자의 생각</h2>
        <p>저는 판타지,실사에는 관심이 많지만 2D에는 관심이 없었습니다.</p>
        <p>그러니 당연히 실력도 실사쪽에 치우쳤죠.</p>
        <p>제가 알아낸 실사에 대한 걸 공유해서라도 2D에 대한 것을 공유받고 싶은 마음이 큽니다</p>
        <p>그리고 저는 프롬프트에 관심이 많지만 다른 분들의 배경,헤어스타일,귀여운 동물 등을 공유받고 싶습니다.</p>
        <p>이러한 과정들을 모두가 나누기엔 연구가와 프롬프트 기술자들에겐 불공평 하겠죠.이 점은 고려할겁니다</p>
        <p>성과에 따른 보상으로 정보에 대한 공유를 생각 중입니다.</p>
      </div>
      <div className="product-specifications">
        <h2 href="/HuntedHouse">배우기</h2>
        <p>저는 귀여움과 19세로 알려드릴 예정입니다.</p>
        <p>일과 작업으로 꺽인 마음을 치유할 귀여움과 피로에 찌든 현대인들에게 자극을 주는 19세가 가장 집중되기 좋다고 생각하기 때문입니다 .</p>
      </div>
      <div className="product-specifications">
        <h2>공유하기</h2>
        <p>여기가 현실적으로 가장 고민이 많고 생각이 많아지는 곳입니다</p>
        <p>프롬프트와 연구글에서 추천을 많이 받은 글은 따로 명예의 전당으로 가꾸어 공유를 진행할 예정입니다.</p>
        <p>모두와 공유하고 싶은 글도 있기 마련이기에 따로 준비해놓겠습니다.</p>
      </div>
      <div className="product-specifications">
        <h2>의뢰하기</h2>
        <p>공개의뢰는 의뢰 기간에 따라 최소비용을 부과할 생각입니다. 그리고 기간동안 의뢰한 분이 작가/팀을 선택하여 진행할 수 있도록 하겠습니다</p>
        <p>1:1 의뢰는 보통 리터치와 간단한 의뢰로 진행할 예정입니다.</p>
        <p>nightWorkers는 평판좋은 전문가와 직접 연결하여 진행되며 큰 작업을 하게끔 할 것이며 이 곳은 아무에게나 해금되지 않게 할 것입니다.</p>
      </div>
    </div>
    <div className="product-footer">
    <h2 href="/HuntedHouse">마치며</h2>
    <p>저는 현재 백수입니다.</p>
    <p>문의 페이지에 글을 남기시면 제가 확인하고</p>
    <p>빠른 시일 내에 수정하겠습니다.</p>
    <p>의뢰서는 따로 제작할 예정이니 기다려 주시면 감사하겠습니다.</p>
    </div>
  </div>
  );
}

export default InfoPage;