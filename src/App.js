import './reset.css';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import EzenHom from './components/EzenHome';
import ListWarp1 from './components/ListWrap1';
import ListWarp2 from './components/ListWrap2';
import ListWarp3 from './components/ListWrap3';
import ListWarp4 from './components/ListWrap4';
import EzenBottom from './components/EzenBottom';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const evt = () => {
    setToggleMenu(toggleMenu => !toggleMenu);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header id="top">
          <p className="all_menu">
            <img src="./images/all_menu.png" alt="전체매뉴" width="42" height="59" onClick={evt} />
          </p>
          <div className={`${toggleMenu ? 'toggle' : ''} menu_wrap`}>
            <ul className="menu">
              <li><NavLink to="/">제목</NavLink></li>
              <li><NavLink to="/ListWarp3">EZEN(소개)</NavLink></li>
              <li><NavLink to="/ListWarp2">HTML5란?</NavLink></li>
              <li><NavLink to="/ListWarp1">모바일웹</NavLink></li>
              <li><NavLink to="/ListWarp4">QR코드확인</NavLink></li>
            </ul>
            <p className="menu_close" onClick={evt}>X</p>
          </div>
          <h1><NavLink to="/">EZEN</NavLink></h1>
        </header>
        <nav id="main_menu">
          <ul>
            <li><NavLink to="/">제목</NavLink></li>
            <li><NavLink to="/ListWarp3">EZEN(소개)</NavLink></li>
            <li><NavLink to="/ListWarp2">HTML5란?</NavLink></li>
            <li><NavLink to="/ListWarp1">모바일웹</NavLink></li>
            <li><NavLink to="/ListWarp4">QR코드확인</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<EzenHom />} />
          <Route path="/ListWarp3" element={<ListWarp3 />} />
          <Route path="/ListWarp2" element={<ListWarp2 />} />
          <Route path="/ListWarp1" element={<ListWarp1 />} />
          <Route path="/ListWarp4" element={<ListWarp4 />} />
        </Routes>

      </BrowserRouter>

      <EzenBottom />
    </div>
  );
}

export default App;
