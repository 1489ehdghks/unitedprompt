import './mainPage.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from '../../menu/topMenu';
import logo2 from '../../image/logo/logo2.png'
import BestPictureBox from '../../components/bestPictureBox/bestPictureBox';
import MainPageAnimation from './mainPageAnimation';
import MainPageAnimation2 from './mainPageAnimation2';
import MainPageImageSection from './mainPageImageSection';



function MainPage() {
  return (
    <div className="MainPage">
        
            <header className="MainPage-header">
                <figure>
                  <TopMenu/>
                </figure>
                <p>
                  <img src={logo2} alt="Logo2" />
                </p>
            </header>
            <body>
        <MainPageAnimation/>
        <MainPageAnimation2/>
        <BestPictureBox/>
      </body>
    </div>
  );
}

export default MainPage;