import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import FoodExplorer from "../../assets/Polygon1.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Header({ onSearch, onFavorites, onRequests, onStatecart }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const [statecart, setStateCart] = useState([]);

  function menuMobile(){
    document.querySelector("menu.menu-mobile").classList.toggle("active")



  }

  function handleSignOut() {
    toast.info(`Até logo, ${user.name}`, {
      theme: "light",
      icon: "👋🏼",
      pauseOnHover: false,
      autoClose: 800,
    });
    signOut();
    navigate("/");
  }

  useEffect(() => {
    const HaveData = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    if (HaveData) {
      setStateCart(HaveData);
    }
  }, [onRequests, onStatecart]);

  return (
    <Container>
      <menu className="menu-mobile">
        <div onClick={menuMobile} className="menu-hamburguer">
          <div className="line-one"></div>
          <div className="line-two"></div>
          <div className="line-three"></div>
        </div>
    

        <Link className="logo" to="/">
          <img src={FoodExplorer} alt="" />
          <span>
            food explorer{user.isAdmin ? <p className="admin">admin</p> : null}
          </span>
        </Link>

        {!user.isAdmin ?
        <Link to="/requests" className="btn-pedido">
          <PiReceipt size={24} />
          <span>{statecart && statecart.length > 0 ? `${statecart.length}` : "0"}</span>
        </Link> : null
        }


        <div className="menu-toggle">

        <div className="menu-expand">

          <div>
            <FiSearch size={24} />
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </div>

          {user.isAdmin ? (
            <Link to="/newdish" className="btn-newdish">
              Novo prato
            </Link>
          ) : (
            <>
              {onFavorites && onFavorites.length > 0 && (
                <Link to="/favorites">Meus favoritos</Link>
              )}
            </>
          )}

          <button onClick={handleSignOut} type="button">
            Sair
          </button>
        </div>

          </div>
          

      </menu>

      <nav>
        <Link className="logo" to="/">
          <img src={FoodExplorer} alt="" />
          <span>
            food explorer{user.isAdmin ? <p className="admin">admin</p> : null}
          </span>
        </Link>

        <div>
          <FiSearch size={24} />
          <input
            onChange={(e) => onSearch(e.target.value)}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        {user.isAdmin ? (
          <Link to="/newdish" className="btn-newdish">
            Novo prato
          </Link>
        ) : (
          <>
            {onFavorites && onFavorites.length > 0 && (
              <Link to="/favorites">Meus favoritos</Link>
            )}
            <Link to="/requests" className="btn-pedido">
              <PiReceipt size={24} />
              {statecart && statecart.length > 0
                ? `Pedidos (${statecart.length})`
                : "Pedidos (0)"}
            </Link>
          </>
        )}

        <button onClick={handleSignOut} type="button">
          <RxExit size={32} />
        </button>
      </nav>
    </Container>
  );
}
