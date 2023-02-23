
import React, { useState, useEffect, useContext } from "react";
import ListComponents from "../../components/petsInformation";
import { GlobalContext } from "../../global/GlobalContext";
import api from '../Api/config'
import RegisterPet from "../RegisterPets/RegisterPets";
import RegisterUser from "../RegisterUser/RegisterUser";
import { Button, ButtonRoom, Column, Container, ContainerScroll, LineTable, NavBar } from "../../styles/PetListingStyled";





const PetListing = () => {
    const {states , setters , functions} = useContext(GlobalContext)
    const {scheduling , registration , pets } = states
    const { setScheduling , setRegistration} = setters
    const {getPets} = functions
    
    useEffect(() => {
      getPets()
    }, [pets])

    const mapPets = pets && pets.map((item , index) => {
        return (
           
                        <tdbody key={item.id}>
                <tr>
                <ol>
                <ListComponents value={item.name} listspet={item} numbering={index} />
                </ol>
                </tr>
                <hr/>
            </tdbody> 
        )
    })
  
    return (
        <Container>
  
            <h1>Agendamentos</h1> 
            <ButtonRoom>
            {/* BOTÃO PARA MOSTRAR O FORMULARIO DE CADASTRO DE NOVO CLIENTE */}
            <Button onClick={() => setRegistration(true)}> Novo cadastro</Button>
            {registration && <RegisterUser/> }
            {/* BOTÃO PARA MOSTRAR O FORMULARIO DE AGENDAMENTO AO SER CLICADO */}
            <Button onClick={() =>setScheduling(true)}>Agendar
            </Button>
            {scheduling && <RegisterPet/>}
            </ButtonRoom>
            <hr />
            <NavBar> 
                <table>
                    <thead>
                      <LineTable>
                            <Column>Agendamento</Column>
                            <Column>Cliente</Column>
                            <Column>Idade</Column>
                            <Column>Raça</Column>
                            <Column>Especie</Column>
                            <Column>Data</Column>
                            <Column>Detalhes</Column>
                            <Column>Editar</Column>
                            <Column>Excluir</Column>
                      </LineTable>
                         
                       
                    </thead>
                </table>


            </NavBar>
        <hr/>

        {mapPets}


        </Container>
    )
}


export default PetListing
