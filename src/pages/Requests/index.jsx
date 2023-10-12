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
  function removeItem(id){
    console.log(id)
    setStateCart(prevState => {
      console.log(prevState)
      prevState.map(item=> {
        console.log(item)
      })
  })
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
        {statecart && statecart.map(item=> {

          return (
           Array(item.quantity).fill(<div key={String(item.id)} className="card">
           <img src={`${baseURL}files/${item.imgurl}`} alt="" />
           <div>
             <div>
             <h2>1x {item.name}</h2>
             <span>R${item.price}</span>
             </div>
             <button onClick={()=> removeItem(item.id)} type="button">Excluir</button>
           </div>
         </div>)
          )



        })  
}
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
