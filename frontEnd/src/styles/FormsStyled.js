import styled from "styled-components"



export const Container = styled.div`
display: flex;
flex-direction: column;
height: 60%;
width: 30%;
background-color: white;
border: 1px solid black;

    position: absolute;
    /* TRAZ O ELEMENTO EM QUESTAO PARA A FRENTE DE TODOS OS OUTROS */
    z-index: 1;
`

export const ContainerBar = styled.div`
     background: white;
  border: 1px solid blue;
  width: 100%;
  height: 10px;
  box-sizing: border-box;
  margin-bottom: 15px;
 
`


export const Bar = styled.div`
background: #e16162;
width: 100px;
height: 100%;
`
export const Titulos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p{
        font-size: 20px;
        letter-spacing: 3px;
    }
`


export const Forms = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100vh;
    

    
`
export const Input = styled.input`
    width: 20vw;
`


// FORMULARIO PARA O REGISTER PET

export const ContainerPet = styled.div`
display: flex;
flex-direction: column;
height: 80%;
width: 30%;
background-color: white;
border: 1px solid black;

    position: absolute;
    /* TRAZ O ELEMENTO EM QUESTAO PARA A FRENTE DE TODOS OS OUTROS */
    z-index: 1;
`



export const Select = styled.select`
    width: 20vw;
    height: 3vh;
    font-size: 0,5em;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 18vw;
    height: 3.4vh;
    font-size: 1.2em;
    
`

export const ButtonConfirmation = styled.button`
     display: flex;
    justify-content: center;
    gap: 20px;
    width: 18vw;
    height: 3.4vh;
    font-size: 1em;
    background-color: #f9bc60;
	border-radius:20px;
	border:2px solid  #061c57;
	display:inline-block;
	cursor:pointer;

`