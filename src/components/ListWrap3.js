import React from "react";
import Wrap3style from './ListWrap3.module.css';

function ListWarp3() {
    return (
        <>
            <article id={Wrap3style.list_wrap3}>
                <h2>EZEN 찾아오기</h2>
                <div id={Wrap3style.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.961939790721!2d126.84889534304722!3d37.30773294519155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f81ed7be66b%3A0x4b5f72df9e8f8dd9!2z7JWI7IKwIOydtOygoOyVhOy5tOuNsOuvuOy7tO2TqO2EsO2VmeybkA!5e0!3m2!1sko!2skr!4v1704423145717!5m2!1sko!2skr" width="600" height="450" title="이젠아카데미"></iframe>
                </div>
                <table id={Wrap3style.information}>
                    <caption>EZEN 고객센터</caption>
                    <tbody>
                        <tr>
                            <th>E-MAIL</th>
                            <td>master@ezen.co.kr</td>
                            <td><a href="mailto:master@ezen.co.kr"><img src="./images/email.png" alt="이메일" width="19" height="17" /></a></td>
                        </tr>
                        <tr>
                            <th>TEL</th>
                            <td>031-321-6789</td>
                            <td><a href=""><img src="./images/tel.png" alt="통화하기" width="19" height="17" /></a></td>
                        </tr>
                        <tr>
                            <th>SERVICE</th>
                            <td colSpan="2"><a href="#!">고객센터 서비스 바로가기</a></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default ListWarp3;