import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


*{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}

html{
    height:100vh;
    font-family: "Montserrat", sans-serif;

}

body{
    height:100vh;
    font-family: "Montserrat", sans-serif;
    padding:0px 30px;

    max-width:480px;
    margin:0 auto;
    width:100%;
    text-align:center;
}


button{
    background-color:#2300a5;
    padding:12px 30px;
    border-radius:8px;
    color:#ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight:600;
    cursor:pointer;
    outline:0px;
    border:0px;
    width:100%;
    margin-top:50px
}
p.score{
    text-align:left;
    font-size:14px;
    font-weight:600;
}




span.rounded{
    border-radius:5px;
    border:1px solid #8d1d80;
    padding:20px;
    display:block;
    height:40px;
    width:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f6f5fb;
    font-size:20px;
    font-weight:700;
    margin-top:5px
}
.App{
    padding:50px 0px;
}


`;
