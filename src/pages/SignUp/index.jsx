import { Container, Form } from "./styles"


export function SignUp(){
    return(
        <Container>
            <div>
                <img src="./src/assets/Polygon1.svg" alt="" />
                <span>food explorer</span>
            </div>

            <Form> 
                <h1>Crie sua Conta</h1>
                <input type="text" />
                <input type="email"/>
                <input type="password"/>
                <button type="submit">Criar Conta</button>
                <a href="">Já tenho uma conta Criada</a>
            </Form>

        </Container>
    )
}

