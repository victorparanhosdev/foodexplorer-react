import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Favorites() {
  const [data, setData] = useState([]);

  const navigate = useNavigate()
  const baseURL = api.defaults.baseURL;
  function removeFavorites(dados){

    const updated = data.filter(itemOld=> itemOld.id !== dados.id)
    setData(updated)
    localStorage.setItem("@FavoritesFoodExplorer", JSON.stringify(updated))
    toast.error("removido dos Favoritos", { icon: "🤍", theme: "light",  autoClose: 400,
    pauseOnHover: false,
    position: "bottom-right" });
    const storedFavorites = JSON.parse(localStorage.getItem("@FavoritesFoodExplorer")) || []
    if(storedFavorites.length === 0){
      navigate("/")
    }
   

  }

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("@FavoritesFoodExplorer")) || [];
    setData(storedFavorites);

  }, []);



  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus favoritos</h1>
        <div>
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} className="card">
                  <img src={`${baseURL}files/${item.imgurl}`} alt="" />
                  <div>
                    <Link to={`/details/${item.id}`}>{item.name}</Link>
                    <button onClick={()=> removeFavorites(item)} type="button">Remover dos Favoritos</button>
                  </div>
                </div>
              );
            })}
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
