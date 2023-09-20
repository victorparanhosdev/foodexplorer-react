import { Container } from "./styles"
import { FiSearch } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import FoodExplorer from "../../assets/Polygon1.svg"
export function Header(){
    return(
        <Container>
            <nav>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer</span>
            </div>

            <div>
                <FiSearch size={24}/>
                <input type="text" placeholder="Busque por pratos ou ingredientes" />
            </div>

            <button type="button">Meus favoritos</button>
            <button className="btn-pedido" type="button"><PiReceipt size={24} />Pedidos (0)</button>
            <button><RxExit size={32}/></button>

            </nav>
       

        </Container>
    )
}