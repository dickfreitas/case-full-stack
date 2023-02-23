import styled from "styled-components"


export const Container = styled.div`
 width: 100vw;
 height: 100vh;
`
export const BackPrin = styled.div`
 
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`


export const DivButton = styled.div`
    display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
gap: 20px;
margin-top: 2em;

`
export const Button = styled.button`

 box-shadow: 0px 2px 0px -50px #fff6af;
 background-color: #f9bc60;
	border-radius:10px;
	border:2px solid  #061c57;
	display:inline-block;
	cursor:pointer;
	color :#001e1d; 
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:10px 34px;
	text-decoration:none;
	text-shadow:0px 0px 0px #ffee66;
	font-family: 'Changa', sans-serif;
 &:active{
  position:relative;
	top:1px;
 }
`


export const Imagem = styled.img`
  width: 20%;
`