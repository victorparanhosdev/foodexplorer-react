import { Container, Content, PayMent } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { MdPix } from "react-icons/md"
import { PiCreditCard, PiReceipt } from "react-icons/pi"

export function Requests() {
  const [statecart, setStateCart] = useState([])
  const [statePayment, setStatePayment] = useState("pix")
  const navigate = useNavigate()
  const baseURL = api.defaults.baseURL;
  function handlePayment(state) {

    setStatePayment(state)
  }
  function removeItem(item) {

    setStateCart(prevState => {
      return prevState.map(itemMap => {
        if (itemMap.id === item.id) {
          if (itemMap.quantity - 1 <= 0) {
            // Se a quantidade for menor ou igual a zero, não retorne o itemMap
            return null;
          } else {
            // Se a quantidade for maior que zero, decremente a quantidade
            return { ...itemMap, quantity: itemMap.quantity - 1 };
          }
        }
        return itemMap;
      }).filter(item => item !== null); // Remova os itens nulos do array
    });

    const HaveData = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    const Updated = HaveData.map(itemMap => {
      if (itemMap.id === item.id) {
        if (itemMap.quantity - 1 <= 0) {
          // Se a quantidade for menor ou igual a zero, não retorne o itemMap
          return null;
        } else {
          // Se a quantidade for maior que zero, decremente a quantidade
          return { ...itemMap, quantity: itemMap.quantity - 1 };
        }
      }
      return itemMap;
    }).filter(item => item !== null);


    localStorage.setItem("@foodrequests", JSON.stringify(Updated))




  }

  useEffect(() => {
    const HaveData = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    if (HaveData) {
      setStateCart(HaveData)
    }
  }, [])


  return (
    <Container>
      <Header onStatecart={statecart} />
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
                      <span>R${Number((item.price)).toFixed(2)}</span>
                    </div>
                    <button onClick={() => removeItem(item)} type="button">Excluir</button>
                  </div>
                </div>
              ));
              return itemsArray;
            })}
            <div className="viewtotal">Total R$ {statecart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0).toFixed(2)}

            </div>

          </div>

        </div>

        <PayMent>
          <h1>Pagamento</h1>

          <table className="typepagament">
            <thead>
              <tr>
                <td><button className={statePayment === 'pix' ? 'selected' : ''} title="pix" onClick={(e) => handlePayment(e.target.title)}><MdPix size={24} />Pix</button></td>
                <td><button className={statePayment === 'credit' ? 'selected' : ''} title="credit" onClick={(e) => handlePayment(e.target.title)}><PiCreditCard size={24} /> Crédito</button> </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  {statePayment === "pix" ? <img src="/src/assets/pix.svg" alt="" /> :

                    <div className="cartao-credit">
                      <div className="n-cartao">
                        <label htmlFor="inputnumbercartao">Número do Cartão</label>
                        <input id="inputnumbercartao" placeholder="0000 0000 0000 0000" type="text" />
                      </div>

                      <div className="v-cartao">
                        <div >
                          <label htmlFor="inputnumbervalidad">Validade</label>
                          <input id="inputnumbervalidad" placeholder="04/25" type="text" />
                        </div>
                        <div>
                          <label htmlFor="inputnumbercvc">CVC</label>
                          <input id="inputnumbercvc" placeholder="000" type="text" />
                        </div>

                      </div>


                      <div className="btn-cartao">
                        <button type="button"><PiReceipt size={24} />Finalizar pagamento</button>
                      </div>
                    </div>


                  }
                </td>

              </tr>
            </tbody>
          </table>

        </PayMent>

      </Content>

      <Footer />
    </Container>
  );
}
