import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../Pages/Api/config";
import infor from '../img/personal_information.svg'
import { ButtonConfirmation, ClientDetails, Container } from "../styles/UserDetailsStyles";
import { Button } from "../styles/FormsStyled";


const UserComponents = (props) =>{
    const {name , adress , adress_number , phone} = props.detailsUser
    const navigate = useNavigate()

    return(
           <div>
        <Container>

         
            <div>
            {/* PEGUEI A FOTO DO UNDRAW IR LA MUDAR A COR DO PERSONAGEM */}
            <img src={infor} alt={'Informações do usuario'}/>
            </div>
            <ClientDetails>
            <h2>Nome: </h2> 
            <p>{name}</p>
            <h2>Endereço:</h2> 
            <p>{adress} -  N :{adress_number}</p>
            <h2>Telefone:</h2> <p>{phone}</p>
            <ButtonConfirmation onClick={()=> navigate("/listPet")}>Voltar</ButtonConfirmation> 
         
            </ClientDetails>

          
        </Container>
        </div>
    )
}

export default UserComponents