import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Favorites() {
  const [data, setData] = useState([])
  const baseURL = api.defaults.baseURL


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("@FavoritesFoodExplorer")) || [];
    setData(storedFavorites)
  }, [])
  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus favoritos</h1>
        <div>
          {data && data.map(item => {
            return (
              <div className="card">
                <img src={`${baseURL}files/${item.imgurl}`} alt="" />
                <div>
                  <h1>{item.name}</h1>
                  <button type="button">Remover dos Favoritos</button>
                </div>
              </div>


            )


          })}
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
