import React from 'react';

import './KakaoLogin.css';


const KakaoLogin = ()=>
    {
        const Rest_api_key='556805e91e800197a8026aa2dfe3c65b' //REST API KEY 입력
        const redirect_uri = 'http://localhost:3000/auth' //Redirect URI 입력

        // oauth 요청 URL
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        const handleLogin = ()=>{
            window.location.href = kakaoURL
        }
        return(
        <>
        <button onClick={handleLogin}>KAKAO 로그인</button>
        </>
        )
    }
    export default KakaoLogin



    