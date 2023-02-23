import styled from "styled-components"

// CONTAINERS 
export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    h1{
        letter-spacing: 5px;
        text-align: center;
        margin-top: 3%;
        
    }
`


export const ListClients = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 20px;
`

export const Information = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   width: 2px;
 h4{
    color: #e16162;
    font-weight: bold;
 }
`
export const Imagem = styled.img`
    width: 25px;
    cursor: pointer;
`

// STYLE DA TABELA DOS COMPONENTS DA LISTAGEM

export  const NavBar = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    
`
export const LineTable = styled.tr`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
   
    
 h4{
    color: #e16162;
    font-weight: bold;
 }
`

export const Column = styled.td`
    padding: 10px;
    width: 10px;
    letter-spacing: 2px;
   
    
 h4{
    color: #e16162;
    font-weight: bold;
 }
`
// BOTOES DA TELA PRINCIPAL


export const Button = styled.button`
     box-shadow: 0px 2px 0px -50px #fff6af;
    background-color: #f9bc60;
	border-radius:20px;
	border:2px solid  #061c57;
	display:inline-block;
	cursor:pointer;
	color : #001e1d; 
	font-family:Arial;
	font-size:15px;
    font-weight:bold;
	padding:10px 20px;
	text-decoration:none;
	text-shadow:0px 0px 0px #ffee66;
    margin-bottom: 10px;
    font-family: 'Changa', sans-serif;
    
 &:active{
  position:relative;
	top:1px;
 }

`

export const ButtonRoom = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
`

