
import React, { useContext } from "react";
import api from '../Api/config'
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../global/GlobalContext";
import { Bar, Button, ButtonConfirmation, Container, ContainerBar, Forms, Input, Titulos } from '../../styles/FormsStyled'
import { toast } from "react-toastify";
import { width } from "@mui/system";




const RegisterUser = () => {
    const { setters } = useContext(GlobalContext)
    const { setRegistration } = setters


    const [form, handleChange, clear] = useForm({
        name: '',
        adress: '',
        adress_number: '',
        phone: '',
    })

    const onSubmitForm = (ev) => {
        ev.preventDefault()
    }

    const addClient = () => {
        const body = {
            name: form.name,
            adress: form.adress,
            adress_number: form.adress_number,
            phone: form.phone
        }
        console.log(body)

        api.post("/register", body).then((res) => {
            toast.success('Successfully registered customer!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setRegistration(false)

        }).catch((error) => {
            console.log(error.message)
        })
    }

    const calculateProgress = () => {
        let value = 0
        let amount = 25

        if (form.name) {
            value += amount
        }
        if (form.adress) {
            value += amount
        }
        if (form.adress_number) {
            value += amount
        }
        if (form.phone) {
            value += amount

        }

        return value
    }


    return (
        <Container>

            <ContainerBar>
                <Bar style={{ width: `${calculateProgress()}%` }}  ></Bar>
            </ContainerBar>
            <Titulos>
                <div>

                </div>
                <p>Novo Cliente</p>
                <div>

                    <button onClick={() => setRegistration(false)}>
                        X
                    </button>
                </div>


            </Titulos>

            <Forms onSubmit={onSubmitForm}>
                Nome:
                <label>
                    <Input type="text"
                        value={form.name}
                        onChange={handleChange}
                        name={"name"}
                    />

                </label>
                Endereço:
                <label>
                    <Input type="text"
                        value={form.adress}
                        onChange={handleChange}
                        name={"adress"}
                    />

                </label>
                Numero Residencial:
                <label>
                    <Input type="text"
                        value={form.adress_number}
                        onChange={handleChange}
                        name={"adress_number"}
                    />

                </label>

                Telefone:
                <label>
                    <Input type="text"
                        value={form.phone}
                        placeholder={"(XX) XXXX-XXXX"}
                        onChange={handleChange}
                        name={"phone"}
                    />

                </label>
                <ButtonConfirmation onClick={() => addClient()} disabled={calculateProgress() !== 100}>Cadastrar</ButtonConfirmation>
                <br />

            </Forms>


        </Container>
    )
}

export default RegisterUser