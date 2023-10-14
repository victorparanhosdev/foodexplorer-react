import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import FoodExplorer from "../../assets/Polygon1.svg"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { toast } from 'react-toastify';
import { useState } from "react"


export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {signIn, loading} = useAuth()

    function handleSignIn(event){
        event.preventDefault()
        if(!email || !password){
            return toast.error("Preencha todos os campos para logar o usuario",{
                autoClose: 1200,
                pauseOnHover: false
            })
        }

        signIn({email, password})

        
    
    }



    
    return(
        <Container>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer</span>
            </div>

            <Form> 
                <h1>Faça Login</h1>
                <Input onChange={e=> setEmail(e.target.value)} type="email" id="emailInput" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                <Input onChange={e=> setPassword(e.target.value)} type="password" id="passwordInput" title="Senha" placeholder="No mínimo 6 caracteres"/>
                <button className={loading ? "disabled" : ''} onClick={e=> handleSignIn(e)} type="submit">{loading ? "Entrando...": "Entrar"}</button>
                <Link to="/cadastro">Criar uma conta</Link>
            </Form>

        </Container>
    )
}

