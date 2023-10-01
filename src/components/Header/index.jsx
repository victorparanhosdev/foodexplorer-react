import { Container } from "./styles"
import { FiSearch } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import FoodExplorer from "../../assets/Polygon1.svg"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export function Header(){
    const navigate = useNavigate()
    const {signOut, user} = useAuth()
    
    function handleSignOut(){
        signOut()
        navigate("/")

    }

    return(
        <Container>
            <nav>
            <div>
                <img src={FoodExplorer} alt="" />
                <span>food explorer{user.isAdmin ? <p className="admin">admin</p> : null}</span>
            
            </div>

            <div>
                <FiSearch size={24}/>
                <input type="text" placeholder="Busque por pratos ou ingredientes" />
            </div>

           
            {user.isAdmin ? <Link to="/newdish" className="btn-newdish">Novos Pratos</Link>:
            <>
            <button type="button">Meus favoritos</button>
            <button className="btn-pedido" type="button"><PiReceipt size={24} />Pedidos (0)</button>
            </>
            }        

            <button onClick={handleSignOut} type="button"><RxExit size={32}/></button>

            </nav>
            
       

        </Container>
    )
}