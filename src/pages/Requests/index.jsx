import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

export function Requests() {
  const [data, setData] = useState([]);

  const navigate = useNavigate()
  const baseURL = api.defaults.baseURL;
 



  return (
    <Container>
      <Header />
      <Content>
        <h1>Meu Pedido</h1>
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

        <div>
        <h1>Pagamento</h1>

        </div>
        
      </Content>

      <Footer />
    </Container>
  );
}
