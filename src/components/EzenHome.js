import React from "react";
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import Homestyle from './EzenHome.module.css';
import bgimg6 from '../image/bg6.jpg';
import bgimg5 from '../image/bg5.jpg';
import bgimg4 from '../image/bg4.jpg';
import bgimg3 from '../image/bg3.jpg';
import bgimg2 from '../image/bg2.jpg';
import bgimg1 from '../image/bg1.jpg';

const bg = keyframes`
0%{background-image:url(${bgimg1});}
20%{background-image:url(${bgimg2});}
40%{background-image:url(${bgimg3});}
60%{background-image:url(${bgimg4});}
8%{background-image:url(${bgimg5});}
100%{background-image:url(${bgimg6});}
`;

const Article = styled.article`
height:800px;
background:url(${bgimg1}) no-repeat 250px 100px;
animation:${bg} 12s infinite linear alternate;
`;

function EzenHome() {
    return (
        <>
            <Article id={Homestyle.list_wrap}>
            <h2>EZEN 신기술 발표</h2>
            <ol className={Homestyle.list1}>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">EZEN 신기술 발표</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
            </ol>
            <h2>이젠의 신기술 발표</h2>
            <ol className={Homestyle.list2}>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">EZEN 신기술 발표</Link></li>
            </ol>
            <h2>EZEN (신기술 발표)</h2>
            <ol className={Homestyle.list3}>
                <li><Link to="/">EZEN 신기술 발표</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
                <li><Link to="/">신제품 발표회 이벤트 개최</Link></li>
            </ol>
             
        </Article>
        </>
    );
}

export default EzenHome;



