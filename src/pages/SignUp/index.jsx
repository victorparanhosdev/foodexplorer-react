import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import FoodExplorer from "../../assets/Polygon1.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"


export function SignUp() {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleCreateAccount(event){
        event.preventDefault()
        if(!name || !email || !password) {
            return alert("Por favor preencha todas as informações")
        }
        try{
            await api.post("/users", {name, email, password})
            navigate("/")
            alert("Usuário Cadastrado com Sucesso")
        }catch(error){
            return alert(error.response.data.message)
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
                <button onClick={e=> handleCreateAccount(e)} type="submit">Criar conta</button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>


        </Container>
    )
}

