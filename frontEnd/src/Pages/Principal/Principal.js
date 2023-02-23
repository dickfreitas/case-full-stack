import React from "react";
import { useNavigate } from "react-router-dom";
import { BackPrin, Button, Imagem , DivButton, Container} from "./PrincipalStyled";
import logo from '../../img/background.png'

const PrincipalPage = () => {


    const navigate = useNavigate()
    return (
        <Container>
            <BackPrin>
                <Imagem src={logo} alt="PetShop"/>
               <DivButton>
                <Button onClick={() =>  navigate("/listPet")} >
                       Entrar
                    </Button>           
               </DivButton>
               
            </BackPrin>


        </Container>
    )
}


export default PrincipalPage;