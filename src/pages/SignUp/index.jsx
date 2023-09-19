import { Container, Form } from "./styles"
import { Input } from "../../components/Input"

export function SignUp(){
    return(
        <Container>
            <div>
                <img src="./src/assets/Polygon1.svg" alt="" />
                <span>food explorer</span>
            </div>

            <Form> 
                <h1>Crie sua conta</h1>
                <Input type="text" title="Seu Nome" placeholder="Exemplo: Maria da Silva"/>
                <Input type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres"/>
                <button type="submit">Criar conta</button>
                <a href="">Já tenho uma conta</a>
            </Form>

        </Container>
    )
}

