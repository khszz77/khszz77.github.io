import React from "react";
import Wrap4style from './ListWrap4.module.css';

function ListWarp4() {
    return (
        <>
            <article id={Wrap4style.list_wrap4}>
                <h2>이젠의 QR 코드</h2>
                <div class="con4">
                    <p><img src="../assets/images/grimg.jpg" alt="#" width="150" height="150" /></p>
                    <p>바코드는 한 방향으로만 정보를 가지고 있는 반면 QR 코드는 가로, 세로 두 방향으로 정보를 가짐으로서 기록할 수 있는 정보량을 비약적으로 증가시킨 코드이다.</p>
                    <p>QR 코드를 통해 모바일쿠폰, 점포정보, 기업사이트 정보 등 다양한 형태로 화용되고 있으며, 나아가 개개인이 필요한 정보를 담아 배포하고, 
                        스마트폰을 이용하여 쉽게 인식하는 등 개인적인 정보를 담아 손쉽게 활용하는 또 하나의 정보 매체로서 주목받고 있다.</p>
                </div>
            </article>
        </>
    );
}

export default ListWarp4;