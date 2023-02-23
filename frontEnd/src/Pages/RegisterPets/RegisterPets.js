import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import api from '../Api/config'
import useForm from "../../hooks/useForm";
import calendario from '../../img/calendario.png'
import correto from '../../img/marca-correta.png'
import { GlobalContext } from "../../global/GlobalContext";
import { Button, ContainerBar, ContainerPet , Forms, Input, Select, Titulos, Bar, ButtonConfirmation} from "../../styles/FormsStyled";
import { toast } from "react-toastify";



const RegisterPet = () => {
    const { states ,setters , functions} = useContext(GlobalContext)
    const {user} = states
    const { setScheduling} = setters
    const {getPets} = functions
  
    const [form, handleChange, clear] = useForm({
        name: '',
        age: '',
        type: '',
        breed: '',
        date : '',
        id_user : '',
    })

 
    const onSubmitForm = (ev) => {
        ev.preventDefault()
    }

    const addUser = () => {
        const body = {
            name: form.name,
            age: form.age,
            type: form.type,
            breed: form.breed,
            date : form.date,
            user_id: form.id_user
        }
     
        api.post("/createPet", body)
            .then((res) => {
                toast.success('Scheduling done successfully!', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
               setScheduling(false)
               getPets()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    const mapUser = user && user.map((item)=>{
        return(
        <option 
       
            key={item.id} value={item.id}>
                {item.name}
            </option>
            )
    })

    const calculateProgress = () =>{
        let value = 0
        let amount = 15

        //TRATAMENTO PARA DATAS
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        let  dataAtual = `${ano}-${mes}-${dia}`;
    

        if(form.name){
            value += amount
        }
        if(form.age){
            value += amount
        }
        if(form.type){
            value += amount
        }
        if(form.breed){
            value += amount
        }
        if(form.date){
            if(form.date >= dataAtual){
                value += amount
            }else{
                alert("Data informada não confere")
                window.location.reload();
            }
        }
        if(form.id_user){
            value += 25
        }

        return value
    }
    return (
        <ContainerPet>
              <ContainerBar>
                    <Bar style={{width :`${calculateProgress()}%`}}  ></Bar>
                </ContainerBar>
            <Titulos>
            <img src={calendario} alt="Calendario"/>
            <p>Novo Agendamento</p>
            {/* BOTÃO PARA FECHAR O FORMULARIO DE CADASTRO MANIPULADO POR ESTADO GLOBAL */}
            <button onClick={()=> setScheduling(false)}>
                X
            </button>
           
            </Titulos>
            <br/>

            <Forms onSubmit={onSubmitForm}
            >
               Nome:
                <label>
                    <Input type="text"
                        value={form.name}
                        onChange={handleChange}
                        name={"name"}
                    />

                </label>

                    Idade:
                <label>
                    <Input type="text"
                        value={form.age}
                        onChange={handleChange}
                        name={"age"}
                    />

                </label>
                
                    Tipo:
                <label>
                    <input type="radio"
                        value="DOG"
                        onChange={handleChange}
                        name={"type"}
                        checked={form.type}
                        
                        />
                        Cachorro
                    <input type="radio"
                        placeholder="DOG ou CAT"
                        value="CAT"
                        onChange={handleChange}
                        name={"type"}
                        checked={form.type === "CAT"}
                    />
                    Gato
                    <br/>

                </label>

                    Raça:
                <label>
                    <Input type="text"
                        value={form.breed}
                        onChange={handleChange}
                        name={"breed"}
                    />

                </label>

                   Tutor:
                <label>
    
                <Select value={form.id_user} type="text"
                onChange={handleChange} 
                name={"id_user"}>
                <option value={''}>--Selecione--</option>
                    {mapUser}
                </Select>
                </label>
                
                    Data:
                <label>
                    <input type="date"
                        value={form.date}
                        onChange={handleChange}
                        name={"date"}
                    />
                </label>

               <div>    
                <hr/>
    
                        <ButtonConfirmation  onClick={() => addUser()} disabled={calculateProgress() !== 100}>
                        <img src={correto} alt="Correto"/>Enviar</ButtonConfirmation>
               </div>
                       
            </Forms>


        </ContainerPet>
    )
}


export default RegisterPet