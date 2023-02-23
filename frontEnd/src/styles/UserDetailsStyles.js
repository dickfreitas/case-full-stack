
import styled from "styled-components";


export const Container = styled.div`
   display: grid;
    grid-template-columns: repeat(2,50%);
   justify-content: center;
   align-items: center;
   margin-top: 10vw;
   margin-left: 10vw;
   
   img{
    width: 35em;
   }
`

export const ClientDetails = styled.div`
    display: flex;
    flex-direction:column;
    width: 20vw;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    
    p{
        font-size: 1.5em;
    }

    h2{
        font-family: 'Changa', sans-serif;

    }

    button{
        margin-bottom: 20px;
    }
`


export const ContainerInfor = styled.div`
   display: grid;
    grid-template-columns: repeat(2,50%);
   justify-content: center;
   align-items: center;
   margin-left: 10vw;
   
   img{
    width: 30vw;
    height: auto;
   }
`

export const InforPets = styled.div`
    width: 50%;
    height: auto;
    border: 1px solid black;
    text-align: center;
    margin-left: 20px;
    letter-spacing: 2px;
    margin-top: 2vw;

    p{
        font-size: 1.2em;
    }

    h2{
        font-family: 'Changa', sans-serif;

    }

    button{
        margin-bottom: 20px;
    }

    input{
        margin-bottom: 10px;
    }

`

export const InputDate = styled.input`
    padding: 10px;
    width: 50%;
    background-color: #f9bc60;
    color: black;
    border: 1px solid black;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;

`

export const ButtonConfirmation = styled.button`
     display: flex;
    justify-content: center;
    gap: 20px;
    width: 10vw;
    height: 3.4vh;
    font-size: 1em;
    background-color: #f9bc60;
    border-radius: 10px;
	border:2px solid  #061c57;
	display:inline-block;
	cursor:pointer;

`