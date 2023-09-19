import { Container } from "./styles";


export function Input({title, ...rest}){
    return(
        <Container>
            <span>{title}</span>
            <input {...rest}/>
        </Container>
    )
}