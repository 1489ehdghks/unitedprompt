import './mainPage.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from '../../menu/topMenu';
import logo2 from '../../image/logo/logo2.png'
import BestPictureBox from '../../components/bestPictureBox/bestPictureBox';
import MainPageAnimation from './mainPageAnimation';
import MainPageAnimation2 from './mainPageAnimation2';
import MainPageCarousel from './mainPageCarousel';


function MainPage() {
  return (
    <div className="MainPage">
            <body>
            <header className="MainPage-TopMenu">
                <figure>
                  <TopMenu/>
                </figure>
                <nav className="MainPage-logo">
                  <img src={logo2} alt="Logo2" />
                </nav>
            </header>
            <section>
              <article>
              <MainPageAnimation/>
              </article>
              <article>
              <MainPageCarousel/>
              </article>
              <article>
              <BestPictureBox/>
              </article>
              <footer>
                
              </footer>
        </section>
      </body>
    </div>
  );
}

export default MainPage;