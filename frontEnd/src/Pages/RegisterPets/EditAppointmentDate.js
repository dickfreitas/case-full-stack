import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../../global/GlobalContext"
import useForm from "../../hooks/useForm"
import api from '../Api/config'
import animals from '../../img/pet_edition.svg'
import dog from '../../img/dog.svg'
import {ButtonConfirmation, ContainerInfor, InforPets, InputDate} from "../../styles/UserDetailsStyles"
import { toast } from "react-toastify"

const EditPet = () =>{
    const {states,setters , functions} = useContext(GlobalContext)
    const [guardian , setGuardian] = useState('')
    const {petsById} = states
    const {name , age , type, breed , client_Id } = petsById
    const {getPetId} = functions
    const params = useParams()
    const navigate = useNavigate()
    const {id} = params
    const [form, handleChange, clear] = useForm({
        date : '',
    })
    
    const userById = ((idUser)=>{
        api.get(`/getUserById/${idUser}`).then((res)=>{
            setGuardian(res.data)
        }).catch((err) =>{
            console.log(err.message)
        })
    })
    const editPetById=(id) =>{
        const body ={
            newDate : form.date
        }
        api.put(`/editPetById/${id}` , body).then((res)=>{
        toast.success('Appointment date changed successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
           
           navigate("/listPet")
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    useEffect(()=>{
        getPetId(id)
    } , [id])

    useEffect(()=>{
        userById(client_Id)
        
    } , [petsById])
    
    return(
        <div>
      
        <ContainerInfor>
            <div>
                {type === "DOG" ? <img src={dog} alt="Cachorro"/>  : <img src={animals} alt="Gato"/>}
            </div>
           
            <span>
            <InforPets>
                <h2>Nome:</h2>
                <p>{name}</p>
                
                <h2>Idade:</h2>
                <p>{age} anos</p>

                <h2>Tipo:</h2>
                {type === "DOG" ? <p>Cachorro</p> : <p>Gato</p> }

                <h2>Raça:</h2>
                <p>{breed}</p>

                <h2>Tutor:</h2>
                <p>{guardian.name}</p>

                <h2>Data:</h2>
                <label>
                    <InputDate 
                    type="date"
                    onChange={handleChange}
                    value={form.date}
                    name={"date"}
                    />
                </label>
                <br/>
                <ButtonConfirmation onClick={() => editPetById(id)}>Confirmar</ButtonConfirmation>
            </InforPets>
            </span>
        </ContainerInfor>
        </div>
    )
}

export default EditPet