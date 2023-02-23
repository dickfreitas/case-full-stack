import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserComponents from "../../components/userInformation";
import { GlobalContext } from "../../global/GlobalContext";
import api from '../Api/config'


const DetailsUser = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {states , setters , functions} = useContext(GlobalContext)
    const {getUserById} = functions
    const {userId} = states
    const { client_Id } = params
 
   
    
    useEffect(()=>{
        getUserById(client_Id)
        },[client_Id])

        
        
    return (
        <div>
            <UserComponents detailsUser={userId}/>
        </div>
    )
}

export default DetailsUser