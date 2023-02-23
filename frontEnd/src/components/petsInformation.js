
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Information, ListClients, Imagem } from "../styles/PetListingStyled";
import {GlobalContext} from '../global/GlobalContext'
import clientInformation from '../img/documento.png'
import editMarkup from '../img/escrito.png'
import deleteCustomer from '../img/lixeira.png'

const ListComponents = (props) =>{
    const {id ,name , age , breed , type , date, client_Id} = props.listspet
    const {functions} = useContext(GlobalContext)
    const {deletePetById} = functions

    let formattingDate = date.split("-")
    let dia = formattingDate[2]
    let mes = formattingDate[1]
    let ano = formattingDate[0]
    const navigate = useNavigate()

    return( 

    
        
        <ListClients>
            <Information><h4>{props.numbering + 1}</h4></Information>
            <Information><h4>{name}</h4></Information>
            <Information>  <p>{age}</p></Information>
            <Information><p> {breed}</p></Information>
            <Information>{type === "DOG" ? <p>Cachorro</p> : <p>Gato</p> }</Information>
            <Information>  <p>{`${dia}`}/{`${mes}`}/{`${ano}`}</p></Information>

            <Information  onClick={ ()=> navigate(`/listPet/${client_Id}`)} >
                <Imagem  src={clientInformation} alt="Client Information"/>
            </Information>
            <Information  onClick={() =>navigate(`/edit/${id}`)}>    
            <Imagem src={editMarkup} alt="Edit Markup"/>
             </Information>
            <Information onClick={()=> deletePetById(id)}>
                <Imagem src={deleteCustomer} alt="Delete Customer"/>
                </Information>
           
           
          
        </ListClients>
    
       
    )
}

export default ListComponents