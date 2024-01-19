import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import Bottomstyle from './EzenBottom.module.css';


function EzenBottom() {
    return (
        <>
        <BrowserRouter>
        <aside className={Bottomstyle.notice}>
        <h3>공지사항</h3>
        <p className={Bottomstyle.blink}>EZEN 제품군 사용설명회 개최</p>
        <ul className={Bottomstyle.sns}>
            <li><Link to="/"><img src="./images/sns_t.gif" alt="#" width="23" height="23" /></Link></li>
            <li><Link to="/"><img src="./images/sns_b_main.gif" alt="#" width="23" height="23" /></Link></li>
            <li><Link to="/"><img src="./images/sns_f.gif" alt="#" width="23" height="23" /></Link></li>
            
        </ul>
    </aside>
    <footer id={Bottomstyle.bottom}>
        <ul className={Bottomstyle.quick2}>
            <li><Link to="/">이용약관</Link></li>
            <li><Link to="/">고객센터</Link></li>
            <li><Link to="/">개인정보취급방침</Link></li>
        </ul>
        <p className={Bottomstyle.btn_wrap}>
            <input type="button" value="PC버전" />
            <input type="button" value="모바일버전" />
            <input type="button" value="로그인" />
        </p>
        <ul className={Bottomstyle.quick1}>
            <li><Link to="/">홈으로</Link></li>
            <li><Link to="/">전체보기</Link></li>
            <li><Link to="/">모든제품보기</Link></li>
        </ul>    
       <p className={Bottomstyle.copy_t}>COPYRIGHT &copy; 2013 CKY. ALL RIGHTS RESERVED.</p>  
       
    </footer>
    </BrowserRouter>
    </>
    );
}

export default EzenBottom;