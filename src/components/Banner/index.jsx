import { Container } from "./styles"
import BannerImg from "../../assets/pngegg1.svg"
export function Banner(){
    return(
        <Container>
            <img src={BannerImg} alt="" />
            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
}