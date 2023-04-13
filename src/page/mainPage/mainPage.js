import './mainPage.css';
import PostList from '../../components/table/PostList';
import { useState } from 'react';
import SideMenu from '../../menu/sideMenu';
import { FcMenu } from "react-icons/fc";
import { VscChromeClose } from "react-icons/vsc";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from '../../menu/topMenu';
import logo2 from '../../image/logo/logo2.png'
import BestPictureBox from '../../components/bestPictureBox/bestPictureBox';
import SerchBar from '../../components/searchbar/serchBar';

function MainPage() {
    const [visible,setVisible]=useState(false);
  return (
    <div className="MainPage">
        
            <header className="MainPage-header">
                <figure>
                  <TopMenu/>
                    <p>
                    <img src={logo2} alt="Logo2" />
                    </p>
                </figure>
            </header>
            <body>
        {<button className="menu" 
            onClick={()=>{
              setVisible(!visible);
        }}>
          {visible?<VscChromeClose/>:<FcMenu />}
        </button>}
        {visible && <SideMenu/>}
        <BestPictureBox/>
      </body>
    </div>
  );
}

export default MainPage;