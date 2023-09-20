import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import FoodExplorer from "../../assets/Polygon1.svg"
import { Link } from "react-router-dom"
export function SignIn(){
    return(
        <Container>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer</span>
            </div>

            <Form> 
                <h1>Faça Login</h1>
                <Input type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"/>
                <button type="submit">Entrar</button>
                <Link to="/cadastro">Criar uma conta</Link>
            </Form>

        </Container>
    )
}

