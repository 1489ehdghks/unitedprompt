import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

const SideMenu=()=>{
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

    return(       
      <div>
      <Nav className="d-flex flex-row-reverse">
        <Nav className="flex-column position-fixed side-menu" style={{ top: 200, right: 0, bottom: 0, width: 200 }}>
        <h4>페이지 추가</h4>
          <Nav.Link onClick={() => handleLinkClick('https://arca.live/b/aiart')}>AI그림채널</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://arca.live/b/aiart/61336136')}>태그 종류</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://gall.dcinside.com/mgallery/board/lists?id=aireality&exception_mode=recommend')}>DC실사갤러리</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://civitai.com/')}>civitai</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://huggingface.co/')}>huggingface</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://chat.openai.com/chat')}>chatGPT</Nav.Link>
          <Nav.Link onClick={() => handleLinkClick('https://papago.naver.com')}>파파고</Nav.Link>

        <h4>페이지 이동</h4>
          <Nav.Link href="/">Home</Nav.Link>
          <button>생성하기</button>
        </Nav>
      </Nav>
      {/* The rest of your app's content goes here */}
    </div>
    )
    };
export default SideMenu;
{/* <Nav.Link href="https://arca.live/b/aiart/61336136">태그 종류</Nav.Link> */}