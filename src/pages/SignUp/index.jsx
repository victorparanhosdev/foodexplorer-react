import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import FoodExplorer from "../../assets/Polygon1.svg"
import { Link } from "react-router-dom"
export function SignUp() {
    return (
        <Container>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer</span>
            </div>


            <Form>
                <h1>Crie sua conta</h1>
                <Input type="text" title="Seu Nome" placeholder="Exemplo: Maria da Silva" />
                <Input type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" />
                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>


        </Container>
    )
}

