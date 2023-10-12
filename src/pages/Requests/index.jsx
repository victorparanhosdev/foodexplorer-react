import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

export function Requests() {
  const [data, setData] = useState([]);
  const [statecart, setStateCart] = useState([])
  const navigate = useNavigate()
  const baseURL = api.defaults.baseURL;
  function removeItem(item) {
    
    setStateCart(prevState => {
      return prevState.map(itemMap => {
        if (itemMap.id === item.id) {
          return { ...itemMap, quantity: itemMap.quantity - 1 };
        }
        return itemMap;
      });
    });

    const HaveData = JSON.parse(localStorage.getItem("@foodrequests")) || [];

    
   const updated = HaveData.map(itemMap => {
      if (itemMap.id === item.id) {
        return { ...itemMap, quantity: itemMap.quantity - 1 };
      }
      return itemMap;
    })


    localStorage.setItem("@foodrequests", JSON.stringify(updated))
    
    

   
  }

  useEffect(() => {
    const HaveData = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    if (HaveData) {
      setStateCart(HaveData)
    }
  }, [])


  return (
    <Container>
      <Header />
      <Content>

        <div>
          <h1>Meu Pedido</h1>
          <div>
            {statecart && statecart.map(item => {
              const itemsArray = Array.from({ length: item.quantity }, (_, index) => (
                <div key={`${item.id}-${index}`} className="card">
                  <img src={`${baseURL}files/${item.imgurl}`} alt="" />
                  <div>
                    <div>
                      <h2>1x {item.name}</h2>
                      <span>R${item.price}</span>
                    </div>
                    <button onClick={() => removeItem(item)} type="button">Excluir</button>
                  </div>
                </div>
              ));
              return itemsArray;
            })}
            <div className="viewtotal">Total R$ 103,00</div>

          </div>

        </div>

        <div>
          <h1>Pagamento</h1>

          <div className="typepagament">

          </div>

        </div>

      </Content>

      <Footer />
    </Container>
  );
}
