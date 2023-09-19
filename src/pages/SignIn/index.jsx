import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"
export function SignIn(){
    return(
        <Container>
            <div>
                <img src="./src/assets/Polygon1.svg" alt="" />
                <span>food explorer</span>
            </div>

            <Form> 
                <h1>Faça Login</h1>
                <Input type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"/>
                <button type="submit">Entrar</button>
                <Link to="/signup">Criar uma conta</Link>
            </Form>

        </Container>
    )
}

