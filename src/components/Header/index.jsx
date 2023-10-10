import { Container } from "./styles"
import { FiSearch } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import FoodExplorer from "../../assets/Polygon1.svg"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"


export function Header({ onSearch, onFavorites, onRequests }) {
    const navigate = useNavigate()
    const { signOut, user } = useAuth()




    function handleSignOut() {
        signOut()
        navigate("/")

    }




    return (
        <Container>
            <nav>
                <Link to="/">
                    <img src={FoodExplorer} alt="" />
                    <span>food explorer{user.isAdmin ? <p className="admin">admin</p> : null}</span>

                </Link>

                <div>
                    <FiSearch size={24} />
                    <input onChange={e => onSearch(e.target.value)} type="text" placeholder="Busque por pratos ou ingredientes" />
                </div>


                {user.isAdmin ? <Link to="/newdish" className="btn-newdish">Novos Pratos</Link> :
                    <>
                        {onFavorites && onFavorites.length > 0 && <Link to="/favorites">Meus favoritos</Link>}
                        <button className="btn-pedido" type="button"><PiReceipt size={24} />{Array.isArray(onRequests) && onRequests.length > 0 ? `Pedidos (${onRequests.length})` : "Pedidos (0)" }</button>
                    </>
                }

                <button onClick={handleSignOut} type="button"><RxExit size={32} /></button>

            </nav>



        </Container>
    )
}