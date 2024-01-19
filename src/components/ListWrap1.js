import React from "react";
import Wrap1style from './ListWrap1.module.css';

function ListWarp1() {
    return (
        <>
            <article id={Wrap1style.list_wrap1}>
                <h2>모바일 웹이란?</h2>
                <dl>
                    <dt>모바일 웹</dt>
                        <dd>스마트폰을 통해 검색하는 웹페이지</dd>
                    <dt>모바일 웹 기술</dt>
                        <dd>CSS3</dd>
                        <dd>자바스크립트</dd>
                        <dd>HTML5</dd>
                        <dd>제이쿼리 모바일</dd>
                    <dt>대표적인 모바일 웹 브라우저</dt>
                        <dd>안드로이드 기본 브라우저</dd>
                        <dd>아이폰 사파리</dd>
                </dl>
            </article>
        </>
    );
}

export default ListWarp1;



