import React from "react";
import Wrap2style from './ListWrap2.module.css';

function ListWarp2() {
    return (
        <>
            <article id={Wrap2style.list_wrap2}>
                <h2>HTML5 란?</h2>
                <p>2004년 6월 Web Hypertext Application Technology Working Group(WHATWG)에서 웹 애플리케이션 1.0이라는 이름으로 세부 명세 작업을 시작하였다.<br />
                    HTML5는 HTML 4.01, XHTML 1.0, DOM Level 2 HTML에 대한 차기 표준 제안이다.<br />
                    최신 멀티미디어 콘텐츠를 브라우저에서 쉽고 용이하게 볼 수 있게하는 것을 목적으로 한다.</p>
            </article>
        </>
    );
}

export default ListWarp2;