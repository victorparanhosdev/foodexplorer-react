import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import FoodExplorer from "../../assets/Polygon1.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import {toast} from "react-toastify"

export function SignUp() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleCreateAccount(event){
        event.preventDefault()
        if(!name || !email || !password) {
            return toast.warning("Por favor preencha todas as informações", {
                autoClose: 1500,
                pauseOnHover: false
            })
        }

        setLoading(true);

        try{
        
            await toast.promise(
                api.post("/users", { name, email, password }),
                {           
                  pending: "Criando a conta, aguarde...",
                  success: {
                    render() {
                        setLoading(false);
                        navigate("/");
                        return `Usuário Cadastrado com Sucesso`
                    },
                    autoClose: 1500,
                    pauseOnHover: false,
                  }
                }
              );

        }catch(error){
            setLoading(false)
            return toast.error(error.response.data.message, {
                autoClose: 1500,
                pauseOnHover: false
            })
        }
    }



    return (
        <Container>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer</span>
            </div>


            <Form>
                <h1>Crie sua conta</h1>
                <Input onChange={e=> setName(e.target.value)} type="text" title="Seu Nome" placeholder="Exemplo: Maria da Silva" />
                <Input onChange={e=> setEmail(e.target.value)} type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                <Input onChange={e=> setPassword(e.target.value)} type="password" title="Senha" placeholder="No mínimo 6 caracteres" />
                <button disabled={loading} className={loading ? "disabled" : ''} onClick={e=> handleCreateAccount(e)} type="submit">{loading ? "Cadastrando..." : "Criar conta" }</button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>


        </Container>
    )
}

