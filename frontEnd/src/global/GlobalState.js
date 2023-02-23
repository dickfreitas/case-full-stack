import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import api from '../Pages/Api/config'
import { toast } from "react-toastify"



export const GlobalState  = (props) =>{
     // ESTADO DO AGENDAMENTO
     const [scheduling , setScheduling] = useState(false)
     const [editDate , setEditDate] = useState(false)
    const [pets , setPets] = useState("")
    const [petsById , setPetsById] = useState([])
     // ESTADO PARA CADASTRO DE NOVO USUARIO
      const [registration , setRegistration] = useState(false)
        const [user, setUser] = useState('')
        const [userId , setUserId] = useState('')

      //PEGANDO AS INFORMAÇOES DO USUARIO DE ACORDO COM O SEU ID

      useEffect(()=>{
        api.get(`getUser`).then((res) => {
            setUser(res.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])

    const getPets = () =>{
        api.get(`handlePet`).then((res) => {
            setPets(res.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }
    const getUserById = (idClient) =>{
          api.get(`getUserById/${idClient}`).then((res)=>{
            setUserId(res.data)
        }).catch((err)=>{
            console.log("Algo de errado aconteceu")
        })
    }

    const deletePetById=(id) =>{
        api.delete(`/handlePet/${id}`).then((res)=>{
            toast.warn('Appointment canceled!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    const getPetId= (id) =>{
        api.get(`/handlePet/${id}`).then((res)=>{
            setPetsById(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    


    const states ={scheduling , registration , editDate,user, pets, petsById, userId}
    const setters = {setScheduling , setRegistration , setEditDate}
    const functions = {deletePetById , getPetId , getUserById, getPets }

    return(
        <GlobalContext.Provider
            value={{states,setters,functions}}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}